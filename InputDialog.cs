using System;
using System.Windows.Forms;

    /// <summary>
    /// 値入力フォームクラス
    /// </summary>
    public class InputDialog<TResult> : Form
    {
        /// <summary>
        /// 新しいインスタンスを生成する
        /// </summary>
        /// <param name="inputControl"></param>
        /// <param name="message"></param>
        public InputDialog(string message, Control inputControl)
        {
            InitializeComponent();

            //コントロール

            inputControl.Margin = new Padding(20);
            pnlMain.Controls.Add(inputControl);

            //プロパティ

            lblMessage.Text = message;

            //横幅をAutoSizeであわせるための設定

            pnlSizing.Width = inputControl.Width + 40;
            pnlSizing.Margin = inputControl.Margin;

            lblMessage.Size = lblMessage.CreateGraphics().MeasureString(message, lblMessage.Font).ToSize();

            if (pnlSizing.Size.Width + pnlSizing.Margin.Left + pnlSizing.Margin.Right <
               lblMessage.Size.Width + lblMessage.Margin.Left + lblMessage.Margin.Right)
            {
                pnlSizing.Width = lblMessage.Width + 40;
                pnlSizing.Margin = lblMessage.Margin;
            }

            lblMessage.AutoSize = true;

            //イベント

            this.SizeChanged += (sender, e) => { pnlButtons.Width = this.ClientSize.Width; };

            btnOk.Click += (sender, e) => { this.DialogResult = DialogResult.OK; };

            btnCancel.Click += (sender, e) => { this.DialogResult = DialogResult.Cancel; };

        }

        /// <summary>
        /// 入力ダイアログを表示し、表示完了後値を取得する。
        /// ダイアログを閉じるかCancelボタンが押下された場合、nullを戻す。
        /// </summary>
        /// <typeparam name="TResult">結果の値の型</typeparam>
        /// <param name="message">メッセージ</param>
        /// <param name="control">入力コントロール</param>
        /// <param name="getValue">値取得のデリゲート</param>
        /// <returns></returns>
        public static TResult Show<TResult>(string message, Control control, Func<TResult> getValue)
            where TResult : class
        {
            var f = new InputDialog<TResult>(message, control);

            if (f.ShowDialog() == DialogResult.OK)
                return getValue();
            else
                return null;
        }

        /// <summary>
        /// 入力ダイアログを表示し、表示完了後値を取得する。
        /// ダイアログを閉じるかCancelボタンが押下された場合、nullを戻す。
        /// </summary>
        /// <typeparam name="TResult">結果の値の型</typeparam>
        /// <param name="message">メッセージ</param>
        /// <param name="control">入力/選択コントロール</param>
        /// <param name="getValue">値取得のデリゲート</param>
        /// <returns></returns>
        public static TResult? Show<TResult>(string message, Control control, Func<TResult?> getValue)
            where TResult : struct
        {

            var f = new InputDialog<TResult>(message, control);

            if (f.ShowDialog() == DialogResult.OK)
                return getValue();
            else
                return null;
        }

        /// <summary>
        /// 入力ダイアログを表示し、コントロールのTextプロパティを取得する。
        /// ダイアログを閉じるかCancelボタンが押下された場合、nullを戻す。
        /// </summary>
        /// <param name="message">メッセージ</param>
        /// <param name="control">入力コントロール</param>
        /// <returns></returns>
        public static string Show(string message, Control control)
        {
            return Show(message, control, () => control.Text);
        }

        /// <summary>
        /// テキスト入力ダイアログを表示し、入力された値を戻す。
        /// ダイアログを閉じるかCancelボタンが押下された場合、nullを戻す。
        /// </summary>
        /// <param name="message">メッセージ</param>
        /// <param name="textboxWidth">テキストボックスの幅</param>
        /// <returns></returns>
        public static string Show(string message, int textboxWidth = 250)
        {
            return Show(message, new TextBox() { Width = textboxWidth });
        }

        //----自動生成コード
        #region Auto generated code

        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.pnlButtons = new System.Windows.Forms.FlowLayoutPanel();
            this.btnOk = new System.Windows.Forms.Button();
            this.btnCancel = new System.Windows.Forms.Button();
            this.lblMessage = new System.Windows.Forms.Label();
            this.pnlMain = new System.Windows.Forms.FlowLayoutPanel();
            this.pnlSizing = new System.Windows.Forms.Panel();
            this.pnlButtons.SuspendLayout();
            this.pnlMain.SuspendLayout();
            this.SuspendLayout();
            // 
            // pnlButtons
            // 
            this.pnlButtons.AutoSize = true;
            this.pnlButtons.BackColor = System.Drawing.SystemColors.Control;
            this.pnlButtons.Controls.Add(this.btnCancel);
            this.pnlButtons.Controls.Add(this.btnOk);
            this.pnlButtons.Dock = System.Windows.Forms.DockStyle.Bottom;
            this.pnlButtons.FlowDirection = System.Windows.Forms.FlowDirection.RightToLeft;
            this.pnlButtons.Location = new System.Drawing.Point(0, 63);
            this.pnlButtons.Margin = new System.Windows.Forms.Padding(0);
            this.pnlButtons.Name = "pnlButtons";
            this.pnlButtons.Size = new System.Drawing.Size(284, 49);
            this.pnlButtons.TabIndex = 3;
            this.pnlButtons.WrapContents = false;
            // 
            // btnOk
            // 
            this.btnOk.Font = new System.Drawing.Font("メイリオ", 9F);
            this.btnOk.Location = new System.Drawing.Point(108, 10);
            this.btnOk.Margin = new System.Windows.Forms.Padding(0, 10, 10, 10);
            this.btnOk.Name = "btnOk";
            this.btnOk.Size = new System.Drawing.Size(78, 29);
            this.btnOk.TabIndex = 0;
            this.btnOk.Text = "OK";
            this.btnOk.UseVisualStyleBackColor = true;
            // 
            // btnCancel
            // 
            this.btnCancel.Font = new System.Drawing.Font("メイリオ", 9F);
            this.btnCancel.Location = new System.Drawing.Point(196, 10);
            this.btnCancel.Margin = new System.Windows.Forms.Padding(0, 10, 10, 10);
            this.btnCancel.Name = "btnCancel";
            this.btnCancel.Size = new System.Drawing.Size(78, 29);
            this.btnCancel.TabIndex = 0;
            this.btnCancel.Text = "キャンセル";
            this.btnCancel.UseVisualStyleBackColor = true;
            // 
            // lblMessage
            // 
            this.lblMessage.BackColor = System.Drawing.Color.Transparent;
            this.lblMessage.Font = new System.Drawing.Font("メイリオ", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(128)));
            this.lblMessage.Location = new System.Drawing.Point(20, 20);
            this.lblMessage.Margin = new System.Windows.Forms.Padding(20, 20, 20, 10);
            this.lblMessage.MaximumSize = new System.Drawing.Size(700, 0);
            this.lblMessage.Name = "lblMessage";
            this.lblMessage.Size = new System.Drawing.Size(80, 0);
            this.lblMessage.TabIndex = 0;
            this.lblMessage.Text = "lblMessage";
            // 
            // pnlMain
            // 
            this.pnlMain.AutoSize = true;
            this.pnlMain.BackColor = System.Drawing.Color.Transparent;
            this.pnlMain.Controls.Add(this.lblMessage);
            this.pnlMain.Dock = System.Windows.Forms.DockStyle.Top;
            this.pnlMain.FlowDirection = System.Windows.Forms.FlowDirection.TopDown;
            this.pnlMain.Location = new System.Drawing.Point(0, 0);
            this.pnlMain.Margin = new System.Windows.Forms.Padding(0);
            this.pnlMain.Name = "pnlMain";
            this.pnlMain.Size = new System.Drawing.Size(284, 30);
            this.pnlMain.TabIndex = 0;
            this.pnlMain.WrapContents = false;
            // 
            // panel1
            // 
            this.pnlSizing.BackColor = System.Drawing.Color.Transparent;
            this.pnlSizing.Location = new System.Drawing.Point(0, 0);
            this.pnlSizing.Name = "panel1";
            this.pnlSizing.Size = new System.Drawing.Size(100, 100);
            this.pnlSizing.TabIndex = 4;
            // 
            // InputDialog
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.AutoSize = true;
            this.BackColor = System.Drawing.SystemColors.Control;
            this.ClientSize = new System.Drawing.Size(284, 112);
            this.Controls.Add(this.pnlButtons);
            this.Controls.Add(this.pnlMain);
            this.Controls.Add(this.pnlSizing);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.MaximizeBox = false;
            this.MaximumSize = new System.Drawing.Size(700, 800);
            this.MinimizeBox = false;
            this.MinimumSize = new System.Drawing.Size(300, 150);
            this.Name = "InputDialog";
            this.ShowIcon = false;
            this.ShowInTaskbar = false;
            this.SizeGripStyle = System.Windows.Forms.SizeGripStyle.Hide;
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.TopMost = true;
            this.pnlButtons.ResumeLayout(false);
            this.pnlMain.ResumeLayout(false);
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        private System.Windows.Forms.FlowLayoutPanel pnlButtons;
        private System.Windows.Forms.Button btnOk;
        private System.Windows.Forms.Button btnCancel;
        private System.Windows.Forms.Label lblMessage;
        private System.Windows.Forms.FlowLayoutPanel pnlMain;
        private System.Windows.Forms.Panel pnlSizing;

        #endregion

    }

