import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';

import { DadosService } from './dados.service';
declare var google: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  private dados: any;

  constructor(
    private dadosService: DadosService
  ) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    )
  }

  /**
   * Inicializa a API de fráficos com delay de 1 segundo, 
   * o que permite a integração da API com o Angular.
   * 
   * @return void
   */
  init(): void {
    if(typeof(google) !== 'undefined') {
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
          google.charts.setOnLoadCallback(this.exibirGraficos())
      }, 1000);
    }
  }

  /**
   * Método chamado assim que a API de fráficos é inicializada.
   * Responsável por chamar os métodos geradores dos fráficos.
   * 
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPieChart();
    this.exibir3dPieChart();
    this.exibirDonutChart();
    this.exibirBarChart();
    this.exibirLineChart();
    this.exibirColumnChart();

  }

  /**
   * Exibe o gráfico Pie Chart.
   * 
   * @return void
   */
  exibirPieChart(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);

    chart.draw(this.obterDataTable(), this.obterOpcoes())
  }

  /**
   * Exibe o gráfico Pie Chart 3D.
   * 
   * @return void
   */
  exibir3dPieChart(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Donut.
   * 
   * @return void
   */
  exibirDonutChart(): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.2;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Bar Chart.
   * 
   * @return void
   */
  exibirBarChart(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);
    const opcoes = this.obterOpcoes();
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Line Chart.
   * 
   * @return void
   */
  exibirLineChart(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    const opcoes = this.obterOpcoes();
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o gráfico Column Chart.
   * 
   * @return void
   */
  exibirColumnChart(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    const opcoes = this.obterOpcoes();
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Cria e retorna o objeto DataTable da API de fráficos, 
   * responsável por definir os dados do gráfico.
   * 
   * @return any
   */
  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');
    data.addRows(this.dados)

    return data;
  }

  /**
   * Retorna as opções do fráfico, que incluem o título
   * e tamanho do gráfico.
   * 
   * @return any
   */
  obterOpcoes(): any {
    return {
      'title': 'Quantidade de cadastros primeiro semestre',
      'width': 400,
      'height': 400
    }
  }
}
