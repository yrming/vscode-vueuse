import { VueUseFunction } from '@vueuse/metadata'
import {
  CancellationToken,
  commands,
  Uri,
  Webview,
  WebviewView,
  WebviewViewProvider,
  WebviewViewResolveContext
} from 'vscode'
import { getUri } from '../utils/getUri'

export class HomeViewProvider implements WebviewViewProvider {
  constructor(private readonly extensionUri: Uri) {}

  resolveWebviewView(
    webviewView: WebviewView,
    context: WebviewViewResolveContext<unknown>,
    token: CancellationToken
  ): void | Thenable<void> {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [this.extensionUri]
    }
    webviewView.webview.html = this._getWebviewContent(webviewView.webview, this.extensionUri)
    this._setWebviewMessageListener(webviewView.webview)
  }

  private _getWebviewContent(webview: Webview, extensionUri: Uri) {
    const stylesUri = getUri(webview, extensionUri, ['webview', 'dist', 'assets', 'index.css'])
    const scriptUri = getUri(webview, extensionUri, ['webview', 'dist', 'assets', 'index.js'])

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <title>VueUse</title>
        </head>
        <body>
          <div id="app"></div>
          <script type="module" src="${scriptUri}"></script>
        </body>
      </html>
    `
  }

  private _setWebviewMessageListener(webview: Webview) {
    webview.onDidReceiveMessage((message: any) => {
      const command = message.command
      const text = message.text as VueUseFunction

      switch (command) {
        case 'showDoc':
          const fnDocPath = text.docs?.replace('https://vueuse.org', '')
          const docPath = `${this.extensionUri.path}/resources/vueuse${fnDocPath}index.md`
          commands.executeCommand('markdown.showPreview', Uri.file(docPath))
          return
      }
    })
  }
}
