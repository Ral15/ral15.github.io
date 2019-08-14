(function ($) {
    $(document).ready(function () {

        $('.btn-empezar').on('click', function (e) {
            var reg = $('#hdfReg').val();
            var mon = $('#hdfMon').val();
            var pub = $('#hdfPub').val();
            var act = $('#hdfAct').val();
            //alert(reg);
            //alert(act);
            if (reg != null && reg != '' && reg != '0') {
                SendEventGA('Planificador', 1, 'planificador');
                if (act == '') {
                    act = 0
                }
                $('#hdfMon').val(0);
                $('#hdfReg').val('');
                $('#hdfAct').val('');
                $('#hdfPub').val(0);
                //window.location.href = 'resultados-planificador.aspx?reg=' + reg + '&mon=' + mon + '&pub=' + pub + '&act=' + act;
                window.location.href = 'resultados-planificador.aspx?reg=' + reg + '&mon=0&pub=0&act=' + act;
            } else {
                alert('No olvides seleccionar el destino a donde quisieras ir.');
            }
        });

    });
})(jQuery);
function setSelection(tip, cod, txt) {
    if (tip == '1') {
        $('#hdfMon').val(cod);
        SendEventGA('Planificador', '1', 'When-' + txt);
    } else if (tip == '2') {
        if (cod == '1') {
            $('#hdfReg').val('24|20|14|13|06|01|16|22');
            SendEventGA('Planificador', '1', 'Where-' + 'Norte');
        } else if (cod == '2') {
            $('#hdfReg').val('02|15|10|12|19|25|09');
            SendEventGA('Planificador', '1', 'Where-' + 'Centro');
        } else {
            $('#hdfReg').val('11|04|18|23|21|05|03|08|17');
            SendEventGA('Planificador', '1', 'Where-' + 'Sur');
        }        
    } else if (tip == '3') {
        if ($('#hdfAct').val().indexOf(cod) >= 0) {
            $('#hdfAct').val($('#hdfAct').val().replace('|' + cod, ""));
            $('#hdfAct').val($('#hdfAct').val().replace(cod + '|', ""));
            $('#hdfAct').val($('#hdfAct').val().replace(cod, ""));
        } else {
            if ($('#hdfAct').val() == null || $('#hdfAct').val() == "") {
                $('#hdfAct').val(cod);
            } else {
                $('#hdfAct').val($('#hdfAct').val() + '|' + cod);
            }
            SendEventGA('Planificador', '1', 'What-' + txt);
        }
    } else {
        $('#hdfPub').val(cod);
        SendEventGA('Planificador', '1', 'With-' + txt);
    }
}

function formatRepo(repo)
{
    if (repo.loading)  {
        return repo.text;
    }
    var markup = '<div class="clearfix">' + '<div class="col-xs-2 col-sm-1" style="float:left;"><img src="' + repo.icon + '" alt="icono YTQP"/></div><div class="col-xs-10 col-sm-11"><a href="' + repo.link + '" class="linkBusqueda" onclick="EnviarDatosBuscador();" style="color:#34aba0">' + repo.name + '</a></br>' + repo.description + '</div>';
    markup += '</div>';
    return markup;
}

function EnviarDatosBuscador() {
    SendEventGA('Buscador', 'search', $('.select2-search__field').val());
}

function SendEventGA(cat, cod, val) {
    var act;
    if (cod == '1') {
        act = "click";
    } else {
        act = cod;
    }
    ga('send', 'event', cat, act, val);
}