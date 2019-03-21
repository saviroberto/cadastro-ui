import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-cadastro-pessoas',
    templateUrl: './cadastro-pessoas.component.html',
    styleUrls: ['./cadastro-pessoas.component.css']
})
export class CadastroPessoasComponent implements OnInit {

    nome = new FormControl('');
    sexo = new FormControl('');
    socorrista = new FormControl('');
    rg = new FormControl('');
    graduacao = new FormControl('');
    nomeDeGuerra = new FormControl('');
    modeloCapa = new FormControl('');
    condicaoCapa = new FormControl('');
    tamanhoCapaQueTem = new FormControl('');
    tamanhoCapaQueUsa = new FormControl('');
    modeloCalca = new FormControl('');
    condicaoCalca = new FormControl('');
    tamanhoCalcaQueTem = new FormControl('');
    tamanhoCalcaQueUsa = new FormControl('');
    modeloBota = new FormControl('');
    condicaoBota = new FormControl('');
    tamanhoBotaQueTem = new FormControl('');
    tamanhoBotaQueUsa = new FormControl('');
    modeloCapacete = new FormControl('');
    condicaoCapacete = new FormControl('');
    numeroCapacete = new FormControl('');
    modeluva = new FormControl('');
    condicaoLuva = new FormControl('');
    tamanhoLuva = new FormControl('');
    condicaoBalaclava = new FormControl('');
    condicaoLuvaVaqueta = new FormControl('');
    tamanhoLuvaVaqueta = new FormControl('');
    condicaoOculosProtecao = new FormControl('');


    form = new FormGroup({

        nome: this.nome,
        sexo: this.sexo,
        socorrista: this.socorrista,
        rg: this.rg,
        graduacao: this.graduacao,
        nomeDeGuerra: this.nomeDeGuerra,
        modeloCapa: this.modeloCapa,
        condicaoCapa: this.condicaoCapa,
        tamanhoCapaQueTem: this.tamanhoCapaQueTem,
        tamanhoCapaQueUsa: this.tamanhoCapaQueUsa,
        modeloCalca: this.modeloCalca,
        condicaoCalca: this.condicaoCalca,
        tamanhoCalcaQueTem: this.tamanhoCalcaQueTem,
        tamanhoCalcaQueUsa: this.tamanhoCalcaQueUsa,
        modeloBota: this.modeloBota,
        condicaoBota: this.condicaoBota,
        tamanhoBotaQueTem: this.tamanhoBotaQueTem,
        tamanhoBotaQueUsa: this.tamanhoBotaQueUsa,
        modeloCapacete: this.modeloCapacete,
        condicaoCapacete: this.condicaoCapacete,
        numeroCapacete: this.numeroCapacete,
        modeluva: this.modeluva,
        condicaoLuva: this.condicaoLuva,
        tamanhoLuva: this.tamanhoLuva,
        condicaoBalaclava: this.condicaoBalaclava,
        condicaoLuvaVaqueta: this.condicaoLuvaVaqueta,
        tamanhoLuvaVaqueta: this.tamanhoLuvaVaqueta,
        condicaoOculosProtecao: this.condicaoOculosProtecao,

    });

    constructor() { }


    ngOnInit() {
    }

    cadastrar() {
        alert(this.nome.value);
        alert(this.socorrista.value);
        alert(this.rg.value);
        alert(this.graduacao.value);
        alert(this.nomeDeGuerra.value);
        alert(this.modeloCapa.value);
        alert(this.condicaoCapa.value);
        alert(this.tamanhoCapaQueTem.value);
        alert(this.tamanhoCapaQueUsa.value);
        alert(this.modeloCalca.value);
        alert(this.condicaoCalca.value);
        alert(this.tamanhoCalcaQueTem.value);
        alert(this.tamanhoCalcaQueUsa.value);
        alert(this.modeloBota.value);
        alert(this.condicaoBota.value);
        alert(this.tamanhoBotaQueTem.value);
        alert(this.tamanhoBotaQueUsa.value);
        alert(this.modeloCapacete.value);
        alert(this.condicaoCapacete.value);
        alert(this.numeroCapacete.value);
        alert(this.modeluva.value);
        alert(this.condicaoLuva.value);
        alert(this.tamanhoLuva.value);
        alert(this.condicaoBalaclava.value);
        alert(this.condicaoLuvaVaqueta.value);
        alert(this.tamanhoLuvaVaqueta.value);
        alert(this.condicaoOculosProtecao.value);
    }
}
