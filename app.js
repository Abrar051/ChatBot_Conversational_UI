{
  'use strict';
  let structure = {
      'menu': [
        {
          'title': 'Projects',
          'id': 'projects',
          'submenu': [
            {
              'title': 'Project 1',
              'id': 'p1'
            },
            {
              'title': 'Project 2',
              'id': 'p2'
            },
            {
              'title': 'Project 3',
              'id': 'p3'
            }
          ]
        },
        {
          'title': 'Writing',
          'id': 'writing',
          'submenu': [
            {
              'title': 'Articles',
              'id': 'articles'
            },
            {
              'title': 'Theses',
              'id': 'theses'
            }
          ]
        },
        {
          'title': 'Contact',
          'id': 'contact',
          'submenu': [
            {
              'title': 'Social media',
              'id': 'socialmedia'
            },
            {
              'title': 'Email',
              'id': 'email'
            },
            {
              'title': 'Address',
              'id': 'address'
            }
          ]
        }
      ]
    },
    idle,
    idletime = 45000;
  const chat = document.querySelector('.chat');
  const content = document.querySelector('.content');




/// This is the main message generator. Also generates button 
  const newMessage = (message, type = 'user') => {
    let bubble = document.createElement('li'),
      slideIn = (el, i) => {
        setTimeout(() => {
          el.classList.add('show');
        }, i * 150 ? i * 150 : 10);
      },
      scroll,
      scrollDown = () => {
        chat.scrollTop += Math.floor(bubble.offsetHeight / 18);
      };  

    let botpicbubble = document.createElement('div')  

    bubble.classList.add('message');
    bubble.classList.add(type);
    bubble.innerHTML = type === 'user' ? `<nav>${message}</nav>` : `<p>${message}</p>`;
    
    chat.appendChild(botpicbubble);
    chat.appendChild(bubble);
    
      
    //console.log(chat);

    scroll = window.setInterval(scrollDown, 16);
    setTimeout(() => {
      window.clearInterval(scroll);
      chat.scrollTop = chat.scrollHeight;
    }, 300);

    setTimeout(() => {
      bubble.classList.add('show');
    }, 10);

    if (type === 'user') {
      let animate = chat.querySelectorAll('button:not(:disabled)');
      for (let i = 0; i < animate.length; i += 1) {
        slideIn(animate[i], i);
      }
      bubble.classList.add('active');
    }
    else{
      bubble.classList.add('botpic');
      botpicbubble.innerHTML = `<img src="https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577870-stock-illustration-cute-smiling-funny-robot-chat.jpg" alt="Bot Image" class="bot-image" />`;
    }

    console.log(botpicbubble)
  };

////




  const randomReply = replies => replies[Math.floor(Math.random() * replies.length)];

  const checkUp = () => {
    let lastMessage = document.querySelector('.active'),
      idleReplies = [
        'Did you fall asleep? &#x1F634;',
        'Coffee break? &#x2615;',
        'Still there?',
        '&#x2744; &#x1F331; &#x1F31E; &#x1F342;'
      ];
    if (lastMessage) {
      lastMessage.parentNode.removeChild(lastMessage);
    }
    //newMessage(randomReply(idleReplies), 'bot');
    setTimeout(() => {
      let helpReplies = [
        'Don\'t like this conversation? Send an email to <a href="mailto:mike@redvolume.com">mike@redvolume.com</a> if you want a real one. &#x1F680;',
        'Not finding what you\'re looking for? Send an email to <a href="mailto:mike@redvolume.com">mike@redvolume.com</a> with any questions...',
        'Wanna talk to a real person? &#x1F4AC; Fire off an email to <a href="mailto:mike@redvolume.com">mike@redvolume.com</a>. &#x1F525;'
      ];
      //newMessage(randomReply(helpReplies), 'bot');
      setTimeout(() => {
        let knowMoreReplies = [
            'Where\'s the normal web page? &#x1F61E;',
            'I want a regular web page &#x1F631;',
            'Do you have a regular website? &#x1F63B;'
          ],
          ageRange10_20 =['10-20'],
          ageRange21_35 =['21-35'],
          ageRange36_55 =['36-55'],
          menuAgainReplies = [
            'Show me the options again please &#x2705;',
            'Ok, go! &#x1F697;',
            'I wanna check something &#x1F44D;'
          ];
      //newMessage(`<button class="choice newmenu showinfo">${ageRange10_20}</button><br /><button class="choice newmenu showmenu">${ageRange21_35}</button>
        //<br /><button class="choice newmenu showmenu">${ageRange36_55}</button>`);
      }, 300);
    }, 500);
  };


  chat.addEventListener('click', function(event) {
    if (event.target.classList.contains('choice')) {
      const selectedGender = event.target.textContent;
      console.log('You selected:', selectedGender);
      // Optionally, display the selected choice in the chat
      newMessage(`You selected: ${selectedGender}`, 'bot');
      newMessage(`I selected: ${selectedGender}`, 'user');
    }
  });


  const init = () => {
    let welcomeReplies = [
      'Hello I am Leo ! Nice to meet you.'
    ];
    idle = window.setInterval(() => {
      window.clearInterval(idle);
      checkUp();
    }, idletime);
    newMessage(randomReply(welcomeReplies), 'bot');

    let conversation = ['May I know your gender ? ' , 'Please tell me your age range' , 'Great Can you select your topic of interest' , 'Pick tow more question'
      ,'How much time do you have today' , 'How many questions do you want to answer ? ' , 
    ] 

    let gender = ['Male','Female','Other'];

    let interestTopic = ['Sports','Enternainment','Bangladesh','History', 'General Knowledge','IQ', 'Liberation War', 'Geography','Current Affairs'];

    let timeofUser = ['1 min','5 min','10 min'];

    let questionAnswer = ['5' , '10' , '15'];

    newMessage(conversation[0], 'bot');
    
    newMessage(`<button class="choicemenu newmenu showinfo">${gender[0]}</button><button class="choicemenu newmenu showmenu">${gender[1]}</button>
      <button class="choicemenu newmenu showmenu">${gender[2]}</button>`);




      chat.addEventListener('click', function(event) {
        if (event.target.classList.contains('choicemenu')) {
          const selectedGender = event.target.textContent;
          //console.log('You selected:', selectedGender);
          // Optionally, display the selected choice in the chat
          //newMessage(`${selectedGender}`, 'bot');
          document.addEventListener('click', e => {
            makeUserBubble(e.target);
          });
          //makeUserBubble(`You selected`);

          let age = ['10-20','21-35','36-55'];

          newMessage(`Please tell me your age`, 'bot');

          newMessage(`<button class="choiceage newmenu showinfo">${age[0]}</button><button class="choiceage newmenu showmenu">${age[1]}</button>
            <button class="choiceage newmenu showmenu">${age[2]}</button>`);

        }

        if (event.target.classList.contains('choiceage')) {
          const selectedAge = event.target.textContent;
          console.log('You selected:', selectedAge);
          // Optionally, display the selected choice in the chat
          //newMessage(`You selected: ${selectedAge}`, 'bot');
          document.addEventListener('click', e => {
            makeUserBubble(e.target);
          });
          newMessage(`Great! Can you select your topic of interest ? `, 'bot');

          newMessage(`<button class="choiceinterest newmenu showinfo">${interestTopic[0]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[1]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[2]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[3]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[4]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[5]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[6]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[7]}</button>
            <button class="choiceinterest newmenu showmenu">${interestTopic[8]}</button>`);

        }

        if (event.target.classList.contains('choiceinterest')) {
          const selectedTopic = event.target.textContent;
          console.log('You selected:', selectedTopic);
          // Optionally, display the selected choice in the chat
          newMessage(`You selected: ${selectedTopic}`, 'bot');

          newMessage(`Awesome Please Answer 2 more question `, 'bot');

          newMessage(`How much time do you have today  ? `, 'bot');

          newMessage(`<button class="choiceUsertime newmenu showinfo">${timeofUser[0]}</button>
            <button class="choiceUsertime newmenu showmenu">${timeofUser[1]}</button>
            <button class="choiceUsertime newmenu showmenu">${timeofUser[2]}</button>`);


        }


        if (event.target.classList.contains('choiceUsertime')) {
          const userTime = event.target.textContent;
          console.log('You selected:', userTime);
          // Optionally, display the selected choice in the chat
          newMessage(`You selected: ${userTime}`, 'bot');

          newMessage(`How many question you want to answer  ? `, 'bot');

          newMessage(`<button class="choicequestiontype newmenu showinfo">${questionAnswer[0]}</button>
            <button class="choicequestiontype newmenu showmenu">${questionAnswer[1]}</button>
            <button class="choicequestiontype newmenu showmenu">${questionAnswer[2]}</button>`);

        }

        if (event.target.classList.contains('choicequestiontype')) {
          const questionType = event.target.textContent;
          console.log('You selected:', questionType);
          // Optionally, display the selected choice in the chat
          newMessage(`You selected: ${questionType}`, 'bot');

          newMessage(`Generating Questions For you`, 'bot');

        }

      });

  };


  
    






  const makeUserBubble = el => {
    el.parentNode.parentNode.classList.add('selected');
    el.parentNode.parentNode.classList.remove('active');
    el.parentNode.parentNode.innerHTML = `<p>${el.textContent}</p>`;
  };




  const showMenu = again => {
    let menu = '',
      goBack = chat.querySelector('button.newmenu'),
      againReplies = [
        'Here\'s a few things that I can tell you about... &#x1F3A4;',
        'Ok, check this out! &#x1F447;',
        'Anything else you\'re interested in? &#x1F64F;'
      ],
      replies = [
        'What would you like to know more about? &#x1F4A1;',
        'Can I interest you in any of this? &#x1F4AF;',
        'Select something of the following... &#x1F447;'
      ];
    if (goBack) {
      makeUserBubble(goBack);
    }
    setTimeout(() => {
      again ? newMessage(randomReply(againReplies), 'bot') : newMessage(randomReply(replies), 'bot');
      structure.menu.forEach((val, index) => {
        menu += `<button class="choice menu" data-submenu="${index}">${val.title}</button>`;
      });
      setTimeout(() => {
        newMessage(menu);
      }, 300);
    }, 500);
    idle = window.setInterval(() => {
      window.clearInterval(idle);
      checkUp();
    }, idletime);
  };





  const menuClick = clicked => {
    let submenu = '',
      menuChoice = structure.menu[clicked.getAttribute('data-submenu')],
      replies = [
        '&#x1F44D; Here\'s what I have on that...',
        'See anything interesting? &#x1F648;',
        'Any of this cool?'
      ],
      userReplies = [
        `I wanna read about something other than ${menuChoice.title.toLowerCase()} &#x1F61C;`,
        'Show me the menu again &#x1F60B;',
        `${menuChoice.title} was interesting, but show me something else... &#x1F612;`
      ];
    menuChoice.submenu.forEach(val => {
      let id = `${menuChoice.id}-${val.id}`;
      submenu += `<button class="choice submenu" aria-controls="${id}" data-content="${id}">${val.title}</button>`;
    });
    submenu += `<br /><button class="choice submenu newmenu">${randomReply(userReplies)}</button>`;
    setTimeout(() => {
      newMessage(randomReply(replies), 'bot');
      setTimeout(() => {
        newMessage(submenu);
      }, 300);
    }, 500);
  };




  const toggleContent = article => {
    let buttons = chat.querySelectorAll('button');
    if (article) {
      article.classList.add('show');
      chat.setAttribute('aria-hidden', 'true');
      content.setAttribute('aria-hidden', 'false');
      content.tabIndex = '0';
      content.focus();
    } else {
      content.setAttribute('aria-hidden', 'true');
      content.tabIndex = '-1';
      chat.setAttribute('aria-hidden', 'false');
      if (history.state && history.state.id === 'content') {
        history.back();
      }
      setTimeout(() => {
        let active = document.querySelector('.content article.show');
        if (active) {
          active.classList.remove('show');
          chat.querySelector(`button[data-content="${active.id}"]`).focus();
        }
      }, 300);
    }
    for (let i = 0; i < buttons.length; i += 1) {
      buttons[i].tabIndex = article ? '-1' : '0';
    }
  };




  //// sub menu click
  const subMenuClick = clicked => {
    if (clicked.classList.contains('newmenu')) {
      showMenu(true);
    } else {
      toggleContent(document.getElementById(clicked.getAttribute('data-content')));
      history.pushState({'id': clicked.getAttribute('data-content')}, '', `#${clicked.getAttribute('data-content')}`);
    }
  };


  /////


  document.addEventListener('click', e => {
    if (e.target.classList.contains('choice')) {
      window.clearInterval(idle);
      if (!e.target.classList.contains('submenu')) {
        makeUserBubble(e.target);
      }

      if (e.target.classList.contains('menu')) {
        menuClick(e.target);
      }

      if (e.target.classList.contains('submenu')) {
        subMenuClick(e.target);
      }

      if (e.target.classList.contains('start')) {
        showMenu();
      }

      if (e.target.classList.contains('showmenu')) {
        showMenu(true);
      }

      if (e.target.classList.contains('click')) {
        newMessage(`You selected: ${selectedGender}`, 'bot');
      }

      


      if (e.target.classList.contains('showinfo')) {
        console.log('came here');
        console.log(e.target.classList);
        let infoReplies = [
            'Here\'s my website ',
            'Here you go: ',
            'Check this one out '
          ],
          okReplies = [
            'OK &#x1F60E;',
            'How do I get back? &#x1F312;',
            'Ok, thanks! &#x1F44C;'
          ];
        setTimeout(() => {
          newMessage(`${randomReply(infoReplies)} <a target="_new" href="https://librarian.codes">https://librarian.codes</a>`, 'bot');
          setTimeout(() => {
            newMessage(`<button class="choice newmenu showmenu">${randomReply(okReplies)}</button>`);
          }, 300);
        }, 500);
      }
    }
    if (e.target.classList.contains('close')) {
      e.preventDefault();
      history.back();
    }
  });


  

  

  document.addEventListener('keydown', e => {
    if (e.keyCode === 27 && content.getAttribute('aria-hidden') === 'false') {
      history.back();
    }
  });




  window.addEventListener('popstate', e => {
    toggleContent(e.state && e.state.id && document.getElementById(e.state.id) ? document.getElementById(e.state.id) : '');
  });

  setTimeout(() => {
    init();
  }, 500);

  if (document.getElementById(window.location.hash.split('#')[1])) {
    let contentId = window.location.hash.split('#')[1];
    history.replaceState('', '', '.');
    setTimeout(() => {
      toggleContent(document.getElementById(contentId));
      history.pushState({'id': contentId}, '', `#${contentId}`);
    }, 10);
  }
}
