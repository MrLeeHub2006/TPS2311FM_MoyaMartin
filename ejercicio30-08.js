
    function conseguirTipoSuscripcion(suscripcion) {
        if (suscripcion == "Free") {
        console.log("Solo puedes tomar los cursos gratis");
     }
        if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
     }
        if (suscripcion =="Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
        }
        if (suscripcion =="ExpertDuo") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
    }
    

    // uso del O o el or || /
    function conseguirTipoSuscripcion(suscripcion) {
        if (suscripcion == "Free" || suscripcion == "free") {
        console.log("Solo puedes tomar los cursos gratis");
     }
        if (suscripcion == "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
     }
        if (suscripcion =="Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un aÃ±o");
        }
        if (suscripcion =="ExpertDuo") {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        }
    }

    // lectura de las dos condiciones //

    
    conseguirTipoSuscripcion("free")        


    ////
    const tipoDeSuscripciones ={
        free: `Solo puedes tomar cursos grstis`,
        basic: `Puedes tomar casi todos los cursos de Platzi durante un mes`,
        expert: `Puedes tomar casi todos los cursos de Platzi durante un año`,
        expertduo: `tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año`,
    };
    ////
    function conseguirTipoSuscripcion(suscripcion){
        if (tiposDeSuscripciones[suscripcion]){
            console.log(tiposDeSuscripciones [suscripcion]);
            return;
        }
        console.warn('ese tipo de suscripcion no existe')
    }
    ////

        const tiposDeSuscripciones = {
            free: "Solo puedes tomar los cursos gratis",
            basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
            expert: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
            expertplus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",
            };
        
        function conseguirTipoSuscripcion(suscripcion){
            if(tiposDeSuscripciones[suscripcion])
            {console.log(tiposDeSuscripciones[suscripcion]);
            return;
            }
            
            console.warn("ese tipo de suscripcion no existe");
        }

     conseguirTipoSuscripcion("llalal")