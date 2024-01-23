window.zE||(function(e,t,s){var n=window.zE=window.zEmbed=function(){n._.push(arguments)}, a=n.s=e.createElement(t),r=e.getElementsByTagName(t)[0];n.set=function(e){ n.set._.push(e)},n._=[],n.set._=[],a.async=true,a.setAttribute("charset","utf-8"), a.src="https://static.zdassets.com/ekr/asset_composer.js?key="+s, n.t=+new Date,a.type="text/javascript",r.parentNode.insertBefore(a,r)})(document,"script","c295f4ff-e226-487e-a516-d2ff4d48f9bd");

zE('webWidget', 'setLocale', 'es');

window.zESettings = {
	  webWidget: {
		chat: {
		   departments: { 
			   enabled: [''],
			   select: 'Guatemala - B2C',
			},
			tags: ['url_gt','gt','chat_gt','chat_b2c','chat_gt_b2c'],
			title: { '*': 'Chateá en vivo' }
		},
		helpCenter: {
      			suppress:true
     		},
		launcher: {
		  label: {'*': 'Ayuda'},
		  chatLabel: {'*': 'Ayuda'},
		  mobile: {labelVisible: true}
		},
		contactForm: {
			suppress: true
               },
		contactOptions: {
			enabled: true,
			contactButton: { '*': 'Contáctanos' },
			chatLabelOnline: { '*': 'Chatea en vivo' },
			chatLabelOffline: { '*': 'Chat no disponible' },
			contactFormLabel: { '*': 'Escríbenos un correo' }
		}
	  } 
};

zE('webWidget:on', 'chat:connected', function() {
 const department = zE('webWidget:get', 'chat:department', 'Guatemala - B2C')
 if (department && department.status === 'offline') {
    zE('webWidget', 'updateSettings', {
        webWidget: {
            chat: { suppress: true }
        }
    });
 }
});

// Init container millicom NPS
var millicom = millicom || {};
millicom.nps = millicom.nps || {};
millicom.nps.b2b_tol_flag = millicom.nps.b2b_tol_flag || 0;
millicom.nps.country = millicom.nps.country || "GT";

    
//Declaracion de varible chat_flag
if(typeof(chatFlagSession) === 'undefined'){
	var chatFlagSession = 0;
    if (sessionStorage.getItem("session_chat_flag")) {
		chatFlagSession = sessionStorage.getItem("session_chat_flag");
	}
	millicom.nps.chat_flag = chatFlagSession;
}

zE('webWidget:on', 'chat:start', function(){
	if(typeof millicom !== 'undefined'){
		millicom.nps.chat_flag = 1;
		sessionStorage.setItem("session_chat_flag", 1);
		if(typeof(KAMPYLE_ONSITE_SDK) !== 'undefined'){
			KAMPYLE_ONSITE_SDK.updatePageView();
		}else{
			console.warn("Kampyle is not defined")
		}
	}
});

zE('webWidget:on', 'chat:end', function(){
	if(typeof millicom !== 'undefined' ){
		millicom.nps.chat_flag = 2;
        sessionStorage.setItem("session_chat_flag", 2);
        if(typeof(KAMPYLE_ONSITE_SDK) !== 'undefined'){
			KAMPYLE_ONSITE_SDK.updatePageView();
        }else{
			console.warn("Kampyle is not defined")
		}
	}
});

