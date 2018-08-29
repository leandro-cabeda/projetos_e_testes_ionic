const https = require('https');

module.exports = app => {

    const ip = app.get('ip');
    let counter = 0;

    	const onibus=[
    	{"id":"5527","codigo":"250-1","nome":"1 DE MAIO"},
    	{"id":"5528","codigo":"250-2","nome":"1 DE MAIO"},
    	{"id":"5641","codigo":"A161-1","nome":"ALIM. DORIVAL C MACHADOIMP. PARQUEROT. E PRADO"},
    	{"id":"5584","codigo":"A16-1","nome":"ALIM. DORIVAL C. MACHADOPARQUE LAVOURA ROTULA SERRARIA"},
    	{"id":"5780","codigo":"A348-1","nome":"ALIM. JARDIM BENTO GONALVES"},
    	{"id":"5777","codigo":"A944-1","nome":"ALIM. PORTALCH.PRASRETORNO ESCOLAR"},
    	{"id":"5254","codigo":"A871-1","nome":"ALIM.MORADAS DA HIPICA VIA GEDEON LEITE"},
    	{"id":"5255","codigo":"A871-2","nome":"ALIM.MORADAS DA HIPICA VIA GEDEON LEITE"},
    	{"id":"5252","codigo":"A87-1","nome":"ALIMENT. MORADAS DA HIPICACOSTA GAMA"},
    	{"id":"5253","codigo":"A87-2","nome":"ALIMENT. MORADAS DA HIPICACOSTA GAMA"},
    	{"id":"5710","codigo":"A66-1","nome":"ALIMENTADORA 3 MENINAS"},
    	{"id":"5711","codigo":"A66-2","nome":"ALIMENTADORA 3 MENINAS"},
    	{"id":"5360","codigo":"A375-1","nome":"ALIMENTADORA AGRONOMIA INTEGRAO"},
    	{"id":"5771","codigo":"A841-1","nome":"ALIMENTADORA B.VELHOS.FCORINCAOBETAO"},
    	{"id":"5772","codigo":"A841-2","nome":"ALIMENTADORA B.VELHOS.FCORINCAOBETAO"},
    	{"id":"5773","codigo":"A861-1","nome":"ALIMENTADORA BELM VELHO"},
    	{"id":"5774","codigo":"A861-2","nome":"ALIMENTADORA BELM VELHO"},
    	{"id":"5251","codigo":"A862-1","nome":"ALIMENTADORA BELM VELHOUFRGS"},
    	{"id":"5687","codigo":"A862-2","nome":"ALIMENTADORA BELM VELHOUFRGS"},
    	{"id":"5827","codigo":"A321-1","nome":"ALIMENTADORA BONSUCESSOPARADA 13"},
    	{"id":"5383","codigo":"A81-1","nome":"ALIMENTADORA CAMPO NOVOCAVALHADA"},
    	{"id":"5786","codigo":"A74-1","nome":"ALIMENTADORA CANTA GALOEXTREMA"},
    	{"id":"5787","codigo":"A74-2","nome":"ALIMENTADORA CANTA GALOEXTREMA"},
    	{"id":"5392","codigo":"A11-1","nome":"ALIMENTADORA CHACARA DO BANCO"},
    	{"id":"5393","codigo":"A11-2","nome":"ALIMENTADORA CHACARA DO BANCO"},
    	{"id":"5395","codigo":"A18-2","nome":"ALIMENTADORA CHICARA DO BANCO NOITE"},
    	{"id":"5851","codigo":"A1-2","nome":"ALIMENTADORA ESCOLAR A1"},
    	{"id":"5855","codigo":"A1-1","nome":"ALIMENTADORA ESCOLAR A1"},
    	{"id":"5262","codigo":"A93-1","nome":"ALIMENTADORA ESCOLAR ANA IRIS"},
    	{"id":"5263","codigo":"A93-2","nome":"ALIMENTADORA ESCOLAR ANA IRIS"},
    	{"id":"5286","codigo":"A691-1","nome":"ALIMENTADORA ESCOLAR LAMIB NOVO"},
    	{"id":"5287","codigo":"A691-2","nome":"ALIMENTADORA ESCOLAR LAMIB NOVO"},
    	{"id":"5784","codigo":"A70-1","nome":"ALIMENTADORA EXTREMA"},
    	{"id":"5785","codigo":"A70-2","nome":"ALIMENTADORA EXTREMA"},
    	{"id":"5388","codigo":"A873-1","nome":"ALIMENTADORA GEDEON LEITE"},
    	{"id":"5389","codigo":"A873-2","nome":"ALIMENTADORA GEDEON LEITE"},
    	{"id":"5256","codigo":"A872-1","nome":"ALIMENTADORA HIPICA COSTA GAMA"},
    	{"id":"5257","codigo":"A872-2","nome":"ALIMENTADORA HIPICA COSTA GAMA"},
    	{"id":"5374","codigo":"A376-1","nome":"ALIMENTADORA HERDEIROS ESMERALDA INTEGRAO"},
    	{"id":"5779","codigo":"A360-1","nome":"ALIMENTADORA IPE"},
    	{"id":"5793","codigo":"A971-1","nome":"ALIMENTADORA J. P. ALVES ESCOLAR IDA"},
    	{"id":"5794","codigo":"A972-1","nome":"ALIMENTADORA J.P. ALVES ESCOLAR VOLTA"},
    	{"id":"5682","codigo":"A741-1","nome":"ALIMENTADORA JARDIM CASCATA"},
    	{"id":"5792","codigo":"A97-1","nome":"ALIMENTADORA JARDIM PROTASIO ALVES"},
    	{"id":"5954","codigo":"A974-1","nome":"ALIMENTADORA JD. PROTASIO ALVESALZIRA ROSA"},
    	{"id":"5249","codigo":"A69-1","nome":"ALIMENTADORA LAMI BELEM NOVO"},
    	{"id":"5250","codigo":"A69-2","nome":"ALIMENTADORA LAMIBELEM NOVO"}

    	];

    /*const carros = [
        { "nome": "Azera V6", "preco": 85000.0, "fotos": [`http://${ip}:8080/images/azera-v6-1.jpg`, `http://${ip}:8080/images/azera-v6-2.jpg`, `http://${ip}:8080/images/azera-v6-3.jpg`] },
        { "nome": "Onix 1.6", "preco": 35000.0, "fotos": [`http://${ip}:8080/images/onix-16-1.jpg`, `http://${ip}:8080/images/onix-16-2.jpg`, `http://${ip}:8080/images/onix-16-3.jpg`] },
        { "nome": "Fiesta 2.0", "preco": 52000.0, "fotos": [`http://${ip}:8080/images/fiesta-20-1.jpg`, `http://${ip}:8080/images/fiesta-20-2.jpg`, `http://${ip}:8080/images/fiesta-20-3.jpg`] },
        { "nome": "C3 1.0", "preco": 22000.0, "fotos": [`http://${ip}:8080/images/c3-10-1.jpg`, `http://${ip}:8080/images/c3-10-2.jpg`, `http://${ip}:8080/images/c3-10-3.jpg`] },
        { "nome": "Uno Fire", "preco": 11000.0, "fotos": [`http://${ip}:8080/images/uno-fire-1.jpg`, `http://${ip}:8080/images/uno-fire-2.jpg`] },
        { "nome": "Sentra 2.0", "preco": 53000.0, "fotos": [`http://${ip}:8080/images/sentra-20-1.jpg`, `http://${ip}:8080/images/sentra-20-2.jpg`, `http://${ip}:8080/images/sentra-20-3.jpg`] },
        { "nome": "Astra Sedan", "preco": 39000.0, "fotos": [`http://${ip}:8080/images/astra-sedan-1.jpg`, `http://${ip}:8080/images/astra-sedan-2.jpg`] },
        { "nome": "Audi A3 Sedan", "preco": 115000.0, "fotos": [`http://${ip}:8080/images/audi-a3-sedan-1.jpg`, `http://${ip}:8080/images/audi-a3-sedan-2.jpg`, `http://${ip}:8080/images/audi-a3-sedan-3.jpg`] },
        { "nome": "Hilux 4x4", "preco": 90000.0, "fotos": [`http://${ip}:8080/images/hilux-4x4-1.jpg`, `http://${ip}:8080/images/hilux-4x4-2.jpg`, `http://${ip}:8080/images/hilux-4x4-3.jpg`] },
        { "nome": "Montana", "preco": 57000.0, "fotos": [`http://${ip}:8080/images/montana-1.jpg`, `http://${ip}:8080/images/montana-2.jpg`, `http://${ip}:8080/images/montana-3.jpg`] },
        { "nome": "Outlander 2.4", "preco": 99000.0, "fotos": [`http://${ip}:8080/images/outlander-24-1.jpg`, `http://${ip}:8080/images/outlander-24-2.jpg`, `http://${ip}:8080/images/outlander-24-3.jpg`] },
        { "nome": "Brasilia Amarela", "preco": 9500.0, "fotos": [`http://${ip}:8080/images/brasilia-amarela-1.jpg`, `http://${ip}:8080/images/brasilia-amarela-2.jpg`, `http://${ip}:8080/images/brasilia-amarela-3.jpg`] },
        { "nome": "Porsche 911 Carrera", "preco": 100000.0, "fotos": [`http://${ip}:8080/images/porsche-911-carrera-1.jpg`, `http://${ip}:8080/images/porsche-911-carrera-2.jpg`] },
        { "nome": "Hyundai HB20", "preco": 60000.0, "fotos": [`http://${ip}:8080/images/hyundai-hb20-1.jpg`, `http://${ip}:8080/images/hyundai-hb20-2.jpg`] },
        { "nome": "Camaro SS", "preco": 120000.0, "fotos": [`http://${ip}:8080/images/camaro-ss-1.jpg`, `http://${ip}:8080/images/camaro-ss-2.jpg`, `http://${ip}:8080/images/camaro-ss-3.jpg`] },
        { "nome": "BMW Cabrio", "preco": 110000.0, "fotos": [`http://${ip}:8080/images/bmw-cabrio-1.jpg`, `http://${ip}:8080/images/bmw-cabrio-2.jpg`] }
    ];*/

    const usuario = {
        "id": 1,
        "nome": "João da Silva",
        "dataNascimento": "30/01/1990",
        "telefone": "(21) 9988-7788",
        "email": "joao@alura.com.br",
        "senha": "alura123"
    };

    /*app.get('/api/carro/listaTodos', (req, res) =>
        res.json(carros));*/
     app.get('/api/bus/listaTodos', (req, res) =>
        res.json(onibus));

    /*app.post('/api/agendamento/agenda', (req, res) => {
        counter++;*/

        app.post('/api/consulta/enviar', (req, res) => {
        counter++;

        //const agendamento = req.body;
        const consulta = req.body;
        
        /*if (counter % 3 != 0) {
            console.log('Agendamento recebido: ' + JSON.stringify(agendamento));
            setTimeout(() => enviaNotificacao(agendamento), 5000);
            res.json(null);
        } else {
            console.log('Erro no processamento do agendamento.');
            res.status(500).end();
        }*/

        if (counter % 3 != 0) {
            console.log('Consulta recebido: ' + JSON.stringify(consulta));
            setTimeout(() => enviaNotificacao(consulta), 5000);
            res.json(null);
        } else {
            console.log('Erro no processamento do consulta.');
            res.status(500).end();
        }
    });

    app.post('/api/v1/notifications', (req, res) => {
        let usuarioLogin = req.body;

        if (usuarioLogin.email == usuario.email 
            && usuarioLogin.senha == usuario.senha) {

                res.json(usuario);
        } else {
            res.status(403).end();
        }
    });

    /*function enviaNotificacao(agendamento) {
        const agendamentoId = agendamento.emailCliente + agendamento.data.substr(0, 10);

        const message = { 
            app_id: "e53f5d24-40e4-458f-99db-5230cf3f8bc0",
            headings: {"en": "Aluracar"},
            contents: {"en": "Agendamento confirmado!"},
            data: {"agendamento-id": agendamentoId},
            included_segments: ["All"]
        };*/

        function enviaNotificacao(consulta) {
        const consultaId = consulta.cpf + consulta.data.substr(0, 10);

        const message = { 
            app_id: "e53f5d24-40e4-458f-99db-5230cf3f8bc0",
            headings: {"en": "Aluracar"},
            contents: {"en": "Consulta confirmado!"},
            data: {"consulta-id": consultaId},
            included_segments: ["All"]
        };

        const headers = {
            "Content-Type": "application/json; charset=utf-8",
            "Authorization": "Basic MGJlOGMxZGEtMDY3Ni00NWY3LWI0ZjYtMjRjMjYzMzhmZmEz"
        };
        
        const options = {
            host: "onesignal.com",
            port: 443,
            path: "/api/v1/notifications",
            method: "POST",
            headers: headers
        };
        
        const req = https.request(options, function(res) {  
          res.on('data', function(data) {
            // console.log("Response:");
            // console.log(JSON.parse(data));
          });
        });
        
        req.on('error', function(e) {
          console.log("ERROR:");
          console.log(e);
        });
        
        req.write(JSON.stringify(message));
        req.end();
      }
};
