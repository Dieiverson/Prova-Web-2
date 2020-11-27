import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medico } from 'src/app/models/Medico';
import { MedicoService } from 'src/app/services/medico.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  nome:string;
  crm:string;
  especialidade:string;

  constructor(private service: 
    MedicoService, private route: ActivatedRoute, private router: Router) { }
  medico: Medico = new Medico();

  ngOnInit(): void {
    
  }
  create():void { 
    this.medico.crm = this.crm;
    this.medico.especialidade = this.especialidade;
    this.medico.nome = this.nome;
    this.service.cadastrar(this.medico).subscribe((medico)=>{
      if(medico == null)
        console.log("erro ao cadastrar");
        else
      console.log(medico);
    }); 
  }
  navigateList():void{
    this.router.navigate(['/Obter']);
  }

}
