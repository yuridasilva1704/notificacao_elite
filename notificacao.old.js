//Verifica e solicita se o usuário tem permissão para utilizar as notificações do Chorme
        document.addEventListener('DOMContentLoaded', function () { //Evento que verifica quando página foi carregada
 
            //Se não tiver suporte a Notification manda um alert para o usuário
            if (!Notification) {
            alert('Desktop notifications not available in your browser. Try Chromium.'); 
            return;
            }
  
    //Se não tem permissão, solicita a autorização do usuário
    if (Notification.permission !== "granted")
    Notification.requestPermission();

});     

    function minhaNotificacao(){
        if (Notification.permission !== "granted")
        {
            Notification.requestPermission();
        }
        else{
            var notificacao = new Notification("Teste", {
                icon : 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
                body : "Apontamentos"

            });

            notificacao.onclick = function(){
                window.open('https://eliteconsultores.app/Apontamentos/Historico?idApontamento=8023');
            };

        }
    }
    minhaNotificacao();
