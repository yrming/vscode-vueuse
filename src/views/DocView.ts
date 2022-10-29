import { VueUseFunction } from '@vueuse/metadata'
import { Disposable, Webview, WebviewPanel, window, Uri, ViewColumn } from 'vscode'
import { getUri } from '../utils/getUri'

export class DocPanel {
  public static currentPanel: DocPanel | undefined
  private readonly _panel: WebviewPanel
  private readonly _fn: VueUseFunction
  private _disposables: Disposable[] = []

  private constructor(panel: WebviewPanel, extensionUri: Uri, fn: VueUseFunction) {
    this._panel = panel
    this._fn = fn
    this._panel.onDidDispose(this.dispose, null, this._disposables)
    this._panel.webview.html = this._getWebviewContent(this._panel.webview, extensionUri)
    this._setWebviewMessageListener(this._panel.webview)
  }

  public static render(extensionUri: Uri, fn: VueUseFunction) {
    if (DocPanel.currentPanel && DocPanel.currentPanel._fn.name === fn.name) {
      DocPanel.currentPanel._panel.reveal(ViewColumn.One)
    } else {
      const panel = window.createWebviewPanel('showDoc', fn.name, ViewColumn.One, {
        enableScripts: true
      })

      DocPanel.currentPanel = new DocPanel(panel, extensionUri, fn)
    }
  }

  public dispose() {
    DocPanel.currentPanel = undefined

    this._panel.dispose()

    while (this._disposables.length) {
      const disposable = this._disposables.pop()
      if (disposable) {
        disposable.dispose()
      }
    }
  }

  private _getWebviewContent(webview: Webview, extensionUri: Uri) {
    const stylesUri = getUri(webview, extensionUri, ['webview', 'dist', 'assets', 'doc.css'])
    const stylesUri2 = getUri(webview, extensionUri, [
      'webview',
      'dist',
      'assets',
      '_plugin-vue_export-helper.css'
    ])
    const scriptUri = getUri(webview, extensionUri, ['webview', 'dist', 'assets', 'doc.js'])
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
    webview.onDidReceiveMessage(
      (message: any) => {
        const command = message.command
        const text = message.text

        switch (command) {
          case 'hello':
            window.showInformationMessage(text)
            return
        }
      },
      undefined,
      this._disposables
    )
  }
}
