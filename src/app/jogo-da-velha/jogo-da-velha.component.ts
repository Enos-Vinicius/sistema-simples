import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(
    private jogoDavelhaService: JogoDaVelhaService
  ) { }

  ngOnInit(): void {
    this.jogoDavelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida.
   * 
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDavelhaService.showInicio;
  }

  /**
   * Retorna se o tabuleiro deve ser exibido.
   * 
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDavelhaService.showTabuleiro;
  }

  /**
   * Retorna se a tela fim de jogo deve ser exibido.
   * 
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDavelhaService.showFinal;
  }

  /**
   * Inicializa os dados de um novo jogo.
   * 
   * @return void
   */
  iniciarJogo(event): void {
    this.jogoDavelhaService.iniciarJogo();
  }

  /**
   * Realiza a jogada ao clicar em um local no tabuleiro.
   * 
   * @param posX number
   * @param posY number
   * @return boolean
   */
  jogar(posX: number, posY: number): void {
    this.jogoDavelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada.
   * @param posX number
   * @param posY number
   * @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDavelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada.
   * @param posX number
   * @param posY number
   * @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDavelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada.
   * @param posX number
   * @param posY number
   * @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDavelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar
   * 
   * @return number
   */
  get jogador(): number {
    return this.jogoDavelhaService.jogador;
  }

  /**
   * Inicia um novo jogo 
   * @return void
   */
  novoJogo(event): void {
    this.jogoDavelhaService.novoJogo();
  }

}
