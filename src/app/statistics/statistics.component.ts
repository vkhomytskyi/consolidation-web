import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {Chart} from "chart.js";
import {SearchStatistic} from "../SearchStatistic";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() statistics: SearchStatistic[];
  @ViewChild('qualityCanvas', {read: ElementRef}) private qualityCanvas: ElementRef;
  @ViewChild('qualitySourcesCanvas', {read: ElementRef}) private qualitySourcesCanvas: ElementRef;
  @ViewChild('sourcesCanvas', {read: ElementRef}) private sourcesCanvas: ElementRef;
  @ViewChild('sourcesLineCanvas', {read: ElementRef}) private sourcesLineCanvas: ElementRef;
  qualityChart: any;
  qualitySourcesChart: any;
  sourcesChart: any;
  sourcesLineChart: any;

  ngOnInit(): void {
    this.buildQualityChart();
    this.buildQualitySourcesChart();
    this.buildSourcesChart();
    this.buildSourcesLineChart();
  }

  buildQualityChart() {
    let ctx = this.qualityCanvas.nativeElement.getContext('2d');

    let dates = this.statistics.map(res => new Date(res.date).toLocaleTimeString());
    let quality = this.statistics.map(res => res.totalFound / res.totalRequested * 100);
    // let requested = this.statistics.map(res => res.totalRequested);

    this.qualityChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: quality,
            borderColor: '#3466ba',
            fill: false,
            label: "Якість (%)",
            fontColor: '#787878'
          }
        ]
      },
      options: {
        display: true,
        responsive: false,
        legend: {
          display: true,
          fontColor: '#787878'
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#787878'
            },
            display: true
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return value + '%';
              }
            },
            gridLines: {
              color: '#787878'
            },
            display: true
          }]
        }
      }
    })
  }

  buildQualitySourcesChart() {
    let ctx = this.qualitySourcesCanvas.nativeElement.getContext('2d');

    let dates = this.statistics.map(res => new Date(res.date).toLocaleTimeString());
    let scopus = this.statistics.map(res => res.scopusFound / res.scopusRequested * 100);
    let rinz = this.statistics.map(res => res.rinzFound / res.rinzRequested * 100);
    let kpi = this.statistics.map(res => res.kpiFound / res.kpiRequested * 100);

    this.qualitySourcesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: scopus,
            borderColor: '#3466ba',
            fill: false,
            label: "Scopus",
            fontColor: '#787878'
          },
          {
            data: rinz,
            borderColor: '#58ba52',
            fill: false,
            label: "РІНЦ",
            fontColor: '#787878'
          },
          {
            data: kpi,
            borderColor: '#a2853c',
            fill: false,
            label: "КПІ",
            fontColor: '#787878'
          }
        ]
      },
      options: {
        display: true,
        responsive: false,
        legend: {
          display: true,
          fontColor: '#787878'
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#787878'
            },
            display: true
          }],
          yAxes: [{
            ticks: {
              callback: function(value, index, values) {
                return value + '%';
              }
            },
            gridLines: {
              color: '#787878'
            },
            display: true
          }]
        }
      }
    })
  }

  buildSourcesChart() {
    let ctx = this.sourcesCanvas.nativeElement.getContext('2d');

    let dates = this.statistics.map(res => new Date(res.date).toLocaleTimeString());

    let scopusRequested = this.statistics.map(res => res.scopusRequested);
    let scopusFound = this.statistics.map(res => res.scopusFound);
    let rinzRequested = this.statistics.map(res => res.rinzRequested);
    let rinzFound = this.statistics.map(res => res.rinzFound);
    let kpiRequested = this.statistics.map(res => res.kpiRequested);
    let kpiFound = this.statistics.map(res => res.kpiFound);

    this.sourcesChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            data: scopusRequested,
            backgroundColor: '#5571ba',
            fill: false,
            label: "Scopus запитано"
          },
          {
            data: scopusFound,
            backgroundColor: '#4640ba',
            fill: false,
            label: "Scopus знайдено"
          },
          {
            data: rinzRequested,
            backgroundColor: '#84ba7f',
            fill: false,
            label: "РІНЦ запитано"
          },
          {
            data: rinzFound,
            backgroundColor: '#58ba52',
            fill: false,
            label: "РІНЦ знайдено"
          },
          {
            data: kpiRequested,
            backgroundColor: '#bab955',
            fill: false,
            label: "КПІ запитано"
          },
          {
            data: kpiFound,
            backgroundColor: '#a2853c',
            fill: false,
            label: "КПІ знайдено"
          }
        ]
      },
      options: {
        display: true,
        responsive: false,
        legend: {
          display: true,
          fontColor: '#787878'
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#787878'
            },
            display: true
          }],
          yAxes: [{
            gridLines: {
              color: '#787878'
            },
            display: true
          }]
        }
      }
    })
  }

  buildSourcesLineChart() {
    let ctx = this.sourcesLineCanvas.nativeElement.getContext('2d');

    let dates = this.statistics.map(res => new Date(res.date).toLocaleTimeString());

    let scopusRequested = this.statistics.map(res => res.scopusRequested);
    let rinzRequested = this.statistics.map(res => res.rinzRequested);
    let kpiRequested = this.statistics.map(res => res.kpiRequested);

    this.sourcesLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates,
        datasets: [
          {
            data: scopusRequested,
            borderColor: '#5571ba',
            fill: false,
            label: "Scopus запитано"
          },
          {
            data: rinzRequested,
            borderColor: '#84ba7f',
            fill: false,
            label: "РІНЦ запитано"
          },
          {
            data: kpiRequested,
            borderColor: '#bab955',
            fill: false,
            label: "КПІ запитано"
          }
        ]
      },
      options: {
        display: true,
        responsive: false,
        legend: {
          display: true,
          fontColor: '#787878'
        },
        scales: {
          xAxes: [{
            gridLines: {
              color: '#787878'
            },
            display: true
          }],
          yAxes: [{
            gridLines: {
              color: '#787878'
            },
            display: true
          }]
        }
      }
    })
  }
}
