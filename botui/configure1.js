var bot = new BotUI('qa');

bot.message.add({
  content: 'お問い合わせ内容を選択してください。',
  loading: true,
  delay: 1000
}).then(function(){
  return bot.action.button({
    delay: 500,
    action: [
      {
        text: '故障',
        value: 1
      },
      {
        text: 'その他',
        value: 2
      }
    ]
  });
}).then(function(res){
  return bot.message.add({
    content: 'キーワードを入力してください',
    loading: true,
    delay: 500
  });
}).then(function(){
  return bot.action.text({
    delay: 700,
    action: {
      placeholder: 'キーワード'
    }
  });
});
