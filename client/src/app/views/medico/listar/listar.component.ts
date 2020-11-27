import { Component, OnInit } from '@angular/core';
import { Medico } from 'src/app/models/Medico';
import { MatTableDataSource } from '@angular/material/table';
import { MedicoService } from 'src/app/services/medico.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  medicoColumns: string[] = ["id", "name", "CRM" , "especialidade"];
  medicos: Medico[] = [];
  medicosTable: MatTableDataSource<Medico> = new MatTableDataSource(this.medicos);
  constructor(private service: MedicoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.service.ObterTodos().subscribe((medicoList)=>{    
      this.medicos = medicoList;
      this.medicosTable = new MatTableDataSource<Medico>(medicoList);       
    });  
  }

}
