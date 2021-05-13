import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Aluno } from "src/app/models/aluno";
import { Professor } from "src/app/models/professor";
import { AlunoService } from "src/app/services/aluno.service";
import { ProfessorService } from "src/app/services/professor.service";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.component.html",
  styleUrls: ["./cadastro.component.css"],
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup = new FormGroup({
    nome: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    senha: new FormControl("", Validators.required),
    tipo: new FormControl("", Validators.required),
  });

  //  constructor(private professorService: ProfessorService) {}
  constructor(private alunoService: AlunoService) {}

  ngOnInit(): void {}

  
  
  inclui() { 
    const dados: Aluno = {
      nome: this.cadastroForm.get("nome")?.value,
      email: this.cadastroForm.get("email")?.value,
      senha: this.cadastroForm.get("senha")?.value,
      tipo: this.cadastroForm.get("tipo")?.value,
    }

    this.alunoService.incluir(dados).subscribe(
      (success) => console.log("Deu bom"),
      (error) => console.log("Deu Ruim"),
      () => console.log("Requisição completa")
    );
  }
}
