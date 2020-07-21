import LocalizedStrings from "react-localization";

var langText = new LocalizedStrings({
	en:{
		here:"here",
		person:{
			bismuth:"Bismuth",
			flesh:"Flesh177",
			gp713:"GreenPower713",
			score:"theScore esports",
			smallant:"SmallAnt",
			snowman:"Snowman Gaming"
		},
		nav:{
			learn:"Learn",
			start:"Start",
			ressources:"Ressources",
			forum:"Forum",
			help:"Help",
			language:"Français"
		},
		home:{
			welcomeMessage:"Welcome to speedlearn.com!",
			siteDesc:"This site is designed to learn speedrunning easily. It is mainly a gathering of ressources and information to help new users to start speedrunning.",
			partnership:"The speedlearn.com website is in partership with {0}. Our site focus mainly on the introduction to speedrunning, while the {0} website focus on leaderboards and the rules for each individual games.",
			what:"If you are not sure of what is speedrunning, please refer to the {0} page.",
			start:"If you know what is speedrunning and want to start, please refer to the {0} page.",
			res:"If you are searching for some specific programs, please refer to the {0} page.",
			question:"If you have some questions, please refer to the {0} page or the {1} page, where it might already be answered.",
			glhf:"Good luck and have fun speedrunning!"
		},         
		learn:{
			whatIs:{
				title:"What is Speedrunning?",
				Bdef:"Speedrunning is the act of completeing an objective in a video game as fast as possible. It has grown immensely in recent years.",
				Gdef:"Speedrunning is a hobby, mainly for entertainement purpose, that allows each one of us to surpass ourself. It is comparable to playing chess, a sport, or a musical instrument.",
				vid:"This video, by {0}, describe what is speedrunning.",
				mythVid:"This video, by {0}, also gives a good introduction to speedrunning with some myth correction."
			},
			why:{
				title:"Why should I Speedrun?",
				reason:"Speedrunning is, above all, a hobby. It is a good feeling to see your time go down and down as you get better in the game. The sensation of self-improvement and the possibility of world records are some reasons as of why to speedrun. It might not be the best hobby for you, but the fact that it can be is, for me, a good reason to, at least, try it.",
				vid:"If you need other reasons to join, {0} talks about it in this video."
			},
			how:{
				title:"How should I start Speedrunning?",
				way:"Please refer to the {0} page of this website to learn how to start your own speedrunning career."
			}
		},
		start:{
			how:"How to start Speedrunning?",
			intro:{
				res:"Starting to speedrun can be super easy if you know how to do it. The next video, by {0}, gives a good way to do it. If you do not want to follow the video, you can continue to read on this page, where everything is given on text."
			},
			game:{
				title:"Step 1: Find your game",
				exp:"This step is actually the most important. You will play that game a lot to perfect it as much as possible. Be sure to take a game that you like, or it will not be fun to speedrun. It could be a game that you like to play right now, or a game that made your childhood. I would also suggest watching some speedruns of that game to see how long it is, since it can be an important factor.",
				exp2:"Another point to note is that games with very hard trick (like The Legend of Zelda: Ocarina of Time) or with a lot of luck (like Minecraft Random Seed) might not be ideal as a first speedrun, since it is really easy to lose a run that would happen to be a Personal Best. Games that are heavily movement based (like Super Mario 64) or games with easy glitches (like Donkey Kong 64) are very good to start since it will be easy to get better while playing.",
				vid:"If you still have some problems to find the game you like, {0} made a video about finding the right game to speedrun."
			},
			timer:{
				title:"Step 2: Find a good timer",
				exp:"Since the goal of a speedrun is to go as fast as possible, using a good timer program would be a very good idea. I personally suggest the use of LiveSplit. It is a really good timer with a lot of functionnalities. You can find the link to the page in the {0} page.",
				vid:"If you have trouble using LiveSplit, this video by {0} might help you."
			},
			learn:{
				title:"Step 3: Learn the game",
				exp:"At this point, you should just watch speedruns, ask questions and take notes. You should learn the route and some basic easy glitches that can save a lot of time. You should be able to find a speedrun of your game on {0}, or even live on Twitch."
			},
			first:{
				title:"Step 4: Play your first run",
				exp:"Now, it is time to finally do your first speedrun. Use everything you have learned to finish a run. Do not worry about mistake, as this is just a baseline for comparison. After finishing a run, congratulation! You are now a speedrunner!"
			},
			future:{
				title:"Step 5: Next step",
				exp:"After having done a couple of runs, you might want to decide to add harder tricks to save even more time. This is the time to learn them. Learn faster setups and quicker movement. Continue progressing and lowering your times down.",
				exp2:"You might also realise that this is not the right game for you. That's fine. You will just have to find your right game to speedrun. Try something else! Speedrunning does not force you into one dirrection. Go free and explore!",
				exp3:"You might also want to post your times on the leaderboard too. Maybe using a capture card (if it's not on computer) or a recording software (like OBS, can be downloaded from the {0} page) to record your gameplay would be a good idea. Only thing that matters is to have fun doing it."
			}
		},
		res:{
			//Description were taken by their respective sites.
			download:"You can download it from this link: {0}",
			livesplit:"LiveSplit",
			livesplitDesc:"LiveSplit is a timer program for speedrunners that has a lot of features, while still being easy to use.",
			obs:"Open Broadcaster Software",
			obsDesc:"OBS Studio is a free and open source software that allow the user to record a video, or live stream.",
			emu:"Emulators",
			emuDesc:"Sometime, it might be easier (or faster) to run and record on emulator. An emulator can simulate the real game on a computer. If you want to use one, be aware that the rules might be stricter, and emulators can even be banned in some cases.",
			emuDownload:"Since emulators vary depending on the console to simulate, you will need to do your own research to download the one you need."
		},
		help:{
			faq:{
				title:"FAQ",
				languageQ:"I would like to change the language of this site. Is it possible?",
				languageA:"Yes. The language of this site follows the browser that you are using. By changing your browser's language, you can change the language of this site. Please note that only English and French are available for now.",
				whatGameQ:"Can I speedrun the game I want?",
				whatGameA:"Yes. Any game is good to speedrun.",
				startQ:"I like this game, but I don't know how to speedrun it. What is the best way to learn it?",
				startA:"Sometime, a speedrunner made a tutorial on it. Search for it on YouTube or Twitch. You can also go to {0} to see the records and try to copy it, but be aware that there might be some more beginner friendly tricks that might be easier to learn and execute.",
				captureCardQ:"I want to play on original console, but do not have a capture card. Is it allowed?",
				captureCardA:"If you want to speedrun for yourself, it is. If you want to submit your time to the leaderboard, you will have to check the rules for the specific game. Some games like Donkey Kong 64 does not require video proof, except for the world records. Other games like Super Mario 64 require a video proof for each and every runs. In that case, usually, recording the screen with an external camera is good enough to submit it.",
				glitchesQ:"Why are all the speedruners cheating by going out of bound? I am not a cheater and would like to respect the developpers and play the game as it should be.",
				glitchesA:"Glitching is not the same as cheating. Glitching means exploiting part of the code of the game to help you progress. Cheating means modifying the code to help you in an unfair way. Usually, glitches are used for skipping cutsceenes (which just mean more time to actually play and less waiting), or to make a big skip. In the last category, it actually might be harder and not easier to perform the glitch.",
				glitchesA2:"If this answer did not satisfy you, please also note that this is the reason that there is categories in speedrunning. For example, Super Mario 64 has 5 main categories. 0/1 stars allows anything to finish the game as quickly as possible. 16 stars is a beginner friendly easy run. 70 stars is a no major glitches run. 120 stars is a 100% type run, where every stars matters. Other games, like Donkey Kong 64, has a glitchless category. But for whatever game you are playing, do not forget that you are not forced to use glitches to do a speedrun.",
				specificQ:"I have a question for my game. Where is the best place to ask it?",
				specificA:"On {0}, each game has its own forum. Asking it there might be the best place. Some games, like The Legend of Zelda: A Link to the Past, also has a speedrunning discord channel that you can join."
			},
			contactUs:{
				title:"Contact Us",
				helpSection:"speedrun.com help section",
				msg:"If you have any question and it is not answered in the forum or in this {0}, please refer to the {1}. You can also send an email to this website author to ymain031@uOttawa.ca."
			}
		},
		error:{
			pageNotFound:"Page not found",
			errorMessage:"We are very sorry, but we could not find the page you were looking for. Maybe it was deleted?",
			returnToSite:"You can click {0} to return to the home page. You can also use the navigation menu to load the page that you want.",
			helpPage:"If you need some help, please look at the {0} page.",
			vidNotSupported:"Your browser does not support video on an html page."
		},
		footer:{
			partnership:"In parnership with:",
			createdBy:"Web site created by:"
		}
	},
	fr:{
		here:"ici",
		nav:{
			learn:"Apprendre",
			start:"Débuter",
			ressources:"Ressources",
			forum:"Forum",
			help:"Aide",
			language:"English"
		},
		home:{
			welcomeMessage:"Bienvenue sur speedlearn.com!",
			siteDesc:"Ce site est conçu pour apprendre le speedrunning facilement. Il s'agit principalement d'un regroupement de ressources et d'information afin d'aider des nouveaux utilisateurs de débuter le speedrun.",
			partnership:"Le site speedlearn.com est en partenariat avec {0}. Notre site se concentre principalement à l'introduction au speedrunning, tandisque le site {0} se concentre sur les classements et règles de chaque jeux individuellement.",
			what:"Si vous ne savez pas ce qu'est le speedrunning, veuillez vous référer à la page {0}.",
			start:"Si vous savez ce qu'est le speedrunning et voulez débuter, veuillez vous référer à la page {0}.",
			res:"Si vous cherchez un programme spécifique, veuillez vous référer à la page {0}.",
			question:"Si vous avez des questions, veuillez vous référer à la page {0} ou la page {1}, où elle pourrait être déjà répondue.",
			glhf:"Bonne chance et amusez-vous en faisant des speedruns!"
		},
		learn:{
			whatIs:{
				title:"Qu'est-ce que le Speedrun?",
				Bdef:"Le speedrun est l'action de compléter un objectif dans un jeux vidéo le plus rapidement que possible. Ceci a grandit immensément au cours des dernières années.",
				Gdef:"Le speedrun est un passe-temps, principalement pour des fins de divertissement, qui permet chacun d'entre nous de se surpasser. C'est comparable à jouer aux échecs, à un sport, ou d'un instrument de musique.",
				vid:"Cette vidéo, par {0}, décrit ce qu'est le speedrunning",
				mythVid:"Cette vidéo, par {0}, donne aussi une bonne introduction au speedrunning avec de la correction de mythes."
			},
			why:{
				title:"Pourquoi devrais-je faire du Speedrun?",
				reason:"Le speedrunning est, avant tout, un passe-temps. C'est une bonne sensation de voir son temps descendre encore et encore au fur et à mesure que l'on s'améliore au jeu. L'impression d'amélioration personnelle et la possibilité d'obtenir des records mondiaux sont d'autre raison pour faire du speedrun. Ce n'est peut-être pas le meilleur passe-temps pour tout le monde, mais le fait qu'il peut l'être pour vous est, pour moi, une bonne raison pour, au moins, l'essayer.",
				vid:"Si vous voulez d'autres raisons pour débuter, {0} en parle dans cette vidéo."
			},
			how:{
				title:"Comment devrais-je débuter?",
				way:"Veuillez vous référer à la page {0} de ce site pour apprendre comment entamer votre propre carrière de speedrunning."
			}
		},
		start:{
			how:"Comment débuter à speedrunner?",
			intro:{
				res:"Commencer à faire des speedrun peut être super facile si l'on sait comment faire. La vidéo suivante, par {0}, présente une bonne façon de le faire. Si vous préférez ne pas suivre cette vidéo, vous pouvez continuer à lire sur cette page, où la méthode sera décrite sous format texte."
			},
			game:{
				title:"Étape 1: Trouver le bon jeu",
				exp:"Cette étape est, en fait, la plus importante. Vous jouerez beaucoup à ce jeu pour le perfectionner le plus que possible. Soyez certain de choisir un jeu que vous aimez, ou ça ne sera pas plaisant à faire des speedrun. Il peut s'agir d'un jeu que vous aimez jouer en ce moment, ou d'un jeu qui a marqué votre enfance. Il est aussi recommandé de regarder quelques speedruns de ce jeu pour voir sa longueur, puisqu'il peut s'agir d'un facteur important.",
				exp2:"Un autre point à noter est que les jeux avec des trucs très difficiles (comme The Legend of Zelda: Ocarina of Time) ou avec beaucoup de chance (comme Minecraft Random Seed) pourrait ne pas être idéal comme premier speedrun, puisqu'il sera vraiment facile de perdre un speedrun qui aurait été un meilleur temps personnel. Les jeux grandement basés sur le mouvement (comme Super Mario 64) ou les jeux avec des glitches faciles (comme Donkey Kong 64) sont vraiment bon pour débuter puisqu'il sera facile de s'améliorer en jouant.",
				vid:"Si vous avez toujours des problèmes à trouver le jeu que vous voulez, {0} a fait une video sur trouver le bon jeu à speedrun."
			},
			timer:{
				title:"Étape 2: Trouver un bon chronomètre",
				exp:"Puisque le but d'un speedrun est d'aller le plus vite que possible, utiliser un bon programme de chronomètre serait une excellente idée. Je suggère personellement l'utilisation de LiveSplit. C'est un très bon chronomètre avec beaucoup de fonctionnalitées. Vous pouvez trouver le lien vers la page de téléchargement dans la page de {0}.",
				vid:"Si vous avez de la difficulté à utiliser LiveSplit, cette vidéo par {0} pourrait vous aider."
			},
			learn:{
				title:"Étape 3: Apprendre le jeu",
				exp:"À ce point, vous devriez juste regarder des speedruns, poser des questions et prendre des notes. Vous devriez apprendre la route et quelques glitches facile et basiques qui peuvent économiser beaucoup de temps. Vous devriez être capable de trouver un speedrun de votre jeu sur {0}, où même en direct sur Twitch."
			},
			first:{
				title:"Étape 4: Jouer votre premier speedrun",
				exp:"Maintenant, il est temps de finalement éffectuer votre premier speedrun. Utilisez tout ce que vous avez appris pour terminer le speedrun. Ne vous préoccupez pas de faire des erreurs, car ce n'est juste qu'une référence pour comparaison. Après avoir terminé un speedrun, félicitation! Vous êtes maintenant un speedrunner!"
			},
			future:{
				title:"Étape 5: Prochaines étapes",
				exp:"Après avoir fait quelque speedruns, vous voulez probablement décider d'ajouter des trucs plus difficiles pour gagner encore plus de temps. C'est maintenant le temps de les apprendre. Apprennez des placements plus rapide et un meilleur mouvement. Continuez à progresser et à descendre vos temps.",
				exp2:"Vous avez peut-être réalisé que ce n'est pas le bon jeu pour vous. C'est correct. Vous devrez juste trouver le bon jeu à speedrun. Essayez quelque chose d'autre! Le speedrunning ne vous force pas dans une dirrection. Soyez libre et explorer!",
				exp3:"Vous voulez possiblement aussi afficher vos temps sur le claasement! Peut-être qu'utiliser une carte de capture (si ce n'est pas sur un ordinateur) ou un logiciel d'enregistrement (comme OBS, qui peut être téléchargé à partir de la page de {0}) pour enregistrer votre jeu serait une bonne idée. La seule chose qui est importante est d'avoir du plaisir en le faisant."
			}
		},
		res:{
			download:"Vous pouvez le télécharger à partir de ce lien: {0}",
			livesplit:"LiveSplit",
			livesplitDesc:"LiveSplit est un programme de chronomètre pour les speedrunners qui possède beaucoup de fonctionnalités, tout en étant facile à utiliser.",
			obs:"Open Broadcaster Software",
			obsDesc:"OBS Studio est un programme gratuit et Open Source qui permet à l'utilisateur d'enregistrer une vidéo, ou de diffuser en direct.",
			emu:"Émulateurs",
			emuDesc:"Parfois, il peut être plus facile (ou plus rapide) de jouer et enregistrer sur un émulateur. Un émulateur peut simuler le vrai jeu sur un ordinateur. Si vous voulez en utiliser un, soyez conscient que les règles peuvent être plus strictes, et les émulateurs peuvent même être proscrits dans certains cas.",
			emuDownload:"Puisque les émulateurs peuvent varier en fonction de la console à simuler, vous devrez faire votre propre recherche afin de télécharger celui dont vous aurez besoin."
		},
		help:{
			faq:{
				title:"FAQ",
				languageQ:"J'aimerais changer la langue de ce site. Est-ce possible?",
				languageA:"Oui. La langue de ce site suit le navigateur que vous utilisez. En changeant votre langue de préférences, vous pouvez changer la langue de ce site. Veuillez noter que seul l'Anglais et le Français sont disponibles pour l'instant.",
				whatGameQ:"Est-ce que je peux speedrunner le jeu que je veux?",
				whatGameA:"Oui. Tout jeu peut être speedrunné.",
				startQ:"J'aime ce jeu, mais je ne sais pas comment le speedun. Quelle est la meilleure façon d'apprendre?",
				startA:"Parfois, un speedrunner a fait un tutoriel sur ce jeu. Recherchez le sur YouTube ou Twitch. Vous pouvez aussi aller sur {0} pour voir les records et essayer de le copier, mais soyez conscient qu'il pourrait y avoir des trucs qui seraient plus facile d'apprendre et exécuter pour les débutants.",
				captureCardQ:"Je veux jouer à un jeu sur sa console d'origine, mais je n'ai pas de carte de capture. Est-ce permi?",
				captureCardA:"Si vous voulez speedrun un jeu pour vous-même, ce l'est. Si vous voulez soumettre vos temps sur le classement, vous devrez regarder les règlements du jeu spécifique. Certain jeux comme Donkey Kong 64 ne nécéssite pas de preuve vidéo, à l'exception des records mondiaux. D'autre jeux comme Super Mario 64 demandent une preuve vidéo pour chaque speedrun. Dans ce cas, habituellement, enregistrer l'écran avec une caméra externe est assez bien pour le soumettre.",
				glitchesQ:"Pourquoi est-ce que tous les speedruners trichent en allant hors de la carte? Je ne suis pas un tricheur et aimerait respecter les développeurs en jouant au jeu comme il faut.",
				glitchesA:"Faire un glitch n'est pas la même chose que tricher. Un glitch est une exploitation d'une partie du code du jeu pour aider à progresser. Tricher veux dire de modifier le code afin d'aider le joueur de manière injuste. Habituellement, les glitches sont utilisés pour sauter les cinématiques (ce qui veux simplement dire plus de temps pour vraiment jouer et moins d'attente), ou pour faire un grand saut. Dans la dernière catégorie, il est possiblement plus difficile et non plus facile d'effectuer le glitch.",
				glitchesA2:"Si cette réponse ne vous a pas satisfait, veuiller noter que c'est pour cette raison qu'il y a des catégories dans le speedrunning. Par exemple, Super Mario 64 a 5 catégories principales. 0/1 étoile permet tout pour finir le jeu le plus rapidement que possible. 16 étoiles est un speedrun facile pour débutants. 70 étoiles est un speedrun sans glitches majeurs. 120 étoiles est un speedrun de type 100%, où toutes les étoiles sont importantes. D'autre jeux, comme Donkey Kong 64, ont une catégorie \"glitchless\". Mais pour tout les jeux que vous jouez, n'oubliez pas que vous n'êtes pas forcés d'utiliser les glitches pour faire un speedrun.",
				specificQ:"J'ai une question pour mon jeu. Où serait la meilleure place pour la poser?",
				specificA:"Sur {0}, chaque jeu à son propre forum. La demander là pourrait être la meilleur place. Certains jeux, comme The Legend of Zelda: A Link to the Past, a aussi un groupe discord pour le speedrunning que vous pouvez rejoindre."
			},
			contactUs:{
				title:"Nous contacter",
				helpSection:"section d'aide de speedrun.com",
				msg:"Si vous avez une question quelle qu'elle soit et qu'elle n'est pas répondue dans le forum ou dans cette {0}, veuillez vous référer à la {1}. Vous pouvez aussi envoyer un courriel à l'auteur de ce site à ymain031@uOttawa.ca."
			}
		},
		error:{
			pageNotFound:"Page non trouvée",
			errorMessage:"Nous sommes vraiment désolé, mais nous n'avons pas été capable de trouver la page que vous recherchiez. Peut-être a-t-elle été supprimée?",
			returnToSite:"Vous pouvez cliquer {0} pour retourner à la page d'accueil. Vous pouvez aussi utiliser le menu de navigation pour charger la page que vous voulez.",
			helpPage:"Si vous voulez de l'aide supplémentaire, veuillez vous référer à la page {0}.",
			vidNotSupported:"Votre navigateur ne supporte pas les video sur une page html."
		},
		footer:{
			partnership:"En partenariat avec:",
			createdBy:"Site web conçu par:"
		}
	}
});

export default langText;