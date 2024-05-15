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
  ]
  
  var texts=[
    "When mom asks what do <br>you eat in the dorm?",
    "When I restarted the code 15 times <br>and it still didn`t work:",
    "When you decided to try a new recipe, <br>but instead of a finished dish, <br>you got a culinary disaster",
    "The feeling when you accidentally like someone <br>else`s photo on Instagram from 2012",
    "Men say we don`t get depressed. <br>And then they create it:",
    "When he did not read the terms of <br>reference and the final result did not <br>coincide with the customer`s expectations",
    "When I got up to the first pairs:",
    "Someone: How are you doing? <br> I'm with a lot of debts and unwillingness to study:",
    "Awaken your inner beast! <br>My inner beast:",
    "Me: Why doesn`t anyone meet me? <br>I`m also at all the events:",
    "Nobody: <br>Absolutely nobody: <br>Me at random:",
    "Teens: schools don't let us get enough sleep! Also teenagers at 3 a.m:",
    "My cat every time <br>I open the refrigerator:",
    "When you've paid your rent, <br>and now you have a place <br>to starve:",
    "My peers are: getting married, <br>building a career, having kids, <br>building a house <br>I am:",
    "When the report is not according to the STC",
    "When the instructor decided to see <br>how our coursework was progressing",
    "When I saw the couples in IKIT <br>on the fifth floor",
    "When the tasks at the end of the sprint <br>didn't burn out",
    "Me: Mom, let`s get a pet <br>Mom: We have a pet at home <br>A pet at home:"
  ],
  
    image=document.getElementById('image'),
    button=document.getElementById('button');
  
    var element = document.getElementById("text");
  
  button.onclick=function(){
    image.src=imgs[Math.floor(Math.random()*imgs.length)];
    element.innerHTML = text.src=texts[Math.floor(Math.random()*texts.length)];
  }
  