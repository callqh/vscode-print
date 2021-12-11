import * as vscode from "vscode";

export type SupportLanguageProps = { [key: string]: (text?: string) => string };
// 支持的编程语言
const supportLanguage: SupportLanguageProps = {
  rust: (text) => `println!("【 ${text} 】==> {:?}", ${text});`,
  javascript: (text) => `console.log("【 ${text} 】==>",${text});`,
  typescript: (text) => `console.log("【 ${text} 】==>",${text});`,
};
/**
 * 获取用户选中的字符串
 * @param editor vscode.TextEditor
 * @returns 获取选中的字符串
 */
const getRangeText = (editor: vscode.TextEditor): string | null => {
  if (!editor) {
    return null;
  }
  const text = editor.document.getText(editor.selection);
  return text;
};

/**
 * 获取打印语句对应编程语言的开头语句
 * @param editor
 * @returns
 */
const printStatements = (editor: vscode.TextEditor, text?: string) => {
  if (!editor) {
    vscode.window.showErrorMessage("当前编辑器崩溃，无法正常使用插件功能");
    return "";
  }
  const { languageId } = editor.document;
  return supportLanguage?.[languageId]?.(text);
};
/**
 * 插入打印字符
 */
const insertPrint = () => {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return vscode.window.showInformationMessage("当前不存在编辑器");
  }
  const text = getRangeText(editor);
  if (!text) {
    vscode.window.showInformationMessage("未选中任何变量");
  } else {
    // 先创建新的一行，然后插入需要打印的数据
    vscode.commands.executeCommand("editor.action.insertLineAfter").then(() => {
      const insertRange = new vscode.Position(
        editor.selection.end.line,
        editor.selection.end.character
      );
      editor.edit((editBuilder) => {
        editBuilder.insert(insertRange, printStatements(editor, text));
      });
    });
  }
};

export function activate(context: vscode.ExtensionContext) {
  // 插入print语句命令
  let insertPrintCommand = vscode.commands.registerCommand("console", () => {
    insertPrint();
  });

  context.subscriptions.push(insertPrintCommand);
}

export function deactivate() {}
