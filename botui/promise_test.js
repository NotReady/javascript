// インスタンス
var bot = new BotUI('qa');

var factory;
var nextSeqId = 0;
factory.get = () => {
  switch (nextSeqId) {
    case 0:
      nextSeqId = 1;
      return () => {
        bot.message.add({
          content: 'お問い合わせ内容を選択してください'
        });
      }
      break;
    default:

  }
}
