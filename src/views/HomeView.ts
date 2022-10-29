import { VueUseFunction } from '@vueuse/metadata'
import {
  CancellationToken,
  Uri,
  Webview,
  WebviewView,
  WebviewViewProvider,
  WebviewViewResolveContext
} from 'vscode'
import { getUri } from '../utils/getUri'
import { DocPanel } from './DocView'

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
    const stylesUri = getUri(webview, extensionUri, ['webview', 'dist', 'assets', 'home.css'])
    const stylesUri2 = getUri(webview, extensionUri, [
      'webview',
      'dist',
      'assets',
      '_plugin-vue_export-helper.css'
    ])
    const scriptUri = getUri(webview, extensionUri, ['webview', 'dist', 'assets', 'home.js'])
    const scriptUri2 = getUri(webview, extensionUri, [
      'webview',
      'dist',
      'assets',
      '_plugin-vue_export-helper.js'
    ])

    return `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" type="text/css" href="${stylesUri}">
          <link rel="stylesheet" type="text/css" href="${stylesUri2}">
          <title>VueUse</title>
        </head>
        <body>
          <div id="app"></div>
          <script type="module" src="${scriptUri}"></script>
          <script type="module" src="${scriptUri2}"></script>
        </body>
      </html>
    `
  }

  private _setWebviewMessageListener(webview: Webview) {
    webview.onDidReceiveMessage((message: any) => {
      const command = message.command
      const fn = message.text as VueUseFunction

      switch (command) {
        case 'showDoc':
          DocPanel.render(this.extensionUri, fn)
          return
      }
    })
  }
}
