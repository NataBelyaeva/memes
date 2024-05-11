var imgs=[
  "https://ltdfoto.ru/images/2024/04/11/photo_12_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_11_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_10_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_9_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_8_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_7_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_6_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_5_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_4_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_3_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_2_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/photo_1_2024-03-28_11-52-27.jpg",
  "https://ltdfoto.ru/images/2024/04/11/3test-mem-img.jpg",
  "https://ltdfoto.ru/images/2024/04/11/1test-mem-img.jpg",
  "https://ltdfoto.ru/images/2024/04/11/300YFl6LPiU.jpg",
  "https://ltdfoto.ru/images/2024/04/11/rAlwz-7V49E.jpg",
  "https://ltdfoto.ru/images/2024/04/11/wYj06zBBcRs.jpg",
  "https://ltdfoto.ru/images/2024/04/11/DL92fjsWpeg.jpg",
  "https://ltdfoto.ru/images/2024/04/11/LDmidteEhWc.jpg",
  "https://ltdfoto.ru/images/2024/04/11/XFy7HQ0fLqA.jpg",
  "https://ltdfoto.ru/images/2024/04/11/tynsioZz6x8.jpg",
  "https://ltdfoto.ru/images/2024/04/11/E8eyB-cJh7k.jpg",
  "https://ltdfoto.ru/images/2024/04/11/xuJ_nhubh_M.jpg",
  "https://ltdfoto.ru/images/2024/04/11/ozoltlCLOvQ.jpg",
  "https://ltdfoto.ru/images/2024/04/11/XN1Rm42nfhY.jpg",
  "https://ltdfoto.ru/images/2024/04/11/Nals5f4xzLQ.jpg",
  "https://ltdfoto.ru/images/2024/04/11/T-f6tv9VNS4.jpg",
  "https://ltdfoto.ru/images/2024/04/11/qG57oadBK_c.jpg",
  "https://ltdfoto.ru/images/2024/04/11/YJ8OuvY1Kl0.jpg",
  "https://ltdfoto.ru/images/2024/04/11/Q3i-DKuQyko.jpg",
  "https://ltdfoto.ru/images/2024/04/11/fmFUF_RmUA.jpg",
  "https://ltdfoto.ru/images/2024/04/11/zM7bt7wsXig.jpg",
  "https://ltdfoto.ru/images/2024/04/11/V2l7CVUyynE.jpg",
  "https://ltdfoto.ru/images/2024/04/11/JvHqHddqhHE.jpg",
  "https://ltdfoto.ru/images/2024/05/11/0nCRu5wWgzU.jpg",
  "https://ltdfoto.ru/images/2024/05/11/2TB1Bvob6bw.jpg",
  "https://ltdfoto.ru/images/2024/05/11/8yOwo_z1cSI.jpg",
]

var texts=[
  "Когда мама спрашивает, хорошо <br>ли ты питаешься в общаге?",
  "Когда перезапустил код 15 раз, <br>а он так и не заработал",
  "Когда ты решил попробовать новый <br>рецепт, но вместо готового блюда <br>получил кулинарную катастрофу",
  "Ощущения, когда ты случайно лайкнул <br>чужое фото на Instagram из 2012 года",
  "Мужчины говорят: у нас нет депрессии <br>А потом создают это",
  "Когда не прочитал ТЗ и итоговый <br>результат не совпал <br>с ожиданиями заказчика",
  "Когда встал к первой паре:",
  "Кто-то: Как у тебя дела? <br>Я с кучей долгов и нежеланием учиться:",
  "Разбуди своего внутреннего зверя! <br>Мой внутренний зверь:",
  "Я: Почему со мной никто не знакомиться <br>Также я на всех мероприятиях:",
  "Никто: <br>Абсолютно никто: <br>Я в рандомный момент:",
  "Подростки: школы не дают нам высыпаться! <br>Также подростки в 3 часа ночи:",
  "Мой кот каждый раз, когда <br>я открываю холодильник:",
  "Когда оплатил аренду, <br>и теперь у тебя есть место, <br>чтобы голодать:",
  "Мои сверстники: женятся, <br>строят карьеру, рожают детей, <br>строят дом <br>Я:",
  "Когда отчёт не по СТУ",
  "Когда перепод решил посмотреть <br>как продвигается наша курсовая",
  "Когда увидел, что пары в ИКИТе <br>на пятом этаже",
  "Когда задачи в конце спринта <br>не сгорели",
  "Я: Мам, давай заведём домашнее животное <br>Мама: У нас есть домашнее животное дома <br>Домашнее животное дома:"
],

  image=document.getElementById('image'),
  button=document.getElementById('button');

  var element = document.getElementById("text");

button.onclick=function(){
  image.src=imgs[Math.floor(Math.random()*imgs.length)];
  element.innerHTML = text.src=texts[Math.floor(Math.random()*texts.length)];
}
