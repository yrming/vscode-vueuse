import { ExtensionContext, window } from 'vscode'
import { HomeViewProvider } from './views/HomeView'

export function activate(context: ExtensionContext) {
  const homeViewProvider = new HomeViewProvider(context.extensionUri)
  window.registerWebviewViewProvider('vueuse.home', homeViewProvider)
}

export function deactivate() {}
