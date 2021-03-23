import { Component, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';

declare var tableau: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

    @ViewChild("vizContainer") vizContainer!: ElementRef;

  viz: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.initViz();

  }

  initViz() {
    const containerDiv = this.vizContainer.nativeElement;

    let url = "https://public.tableau.com/views/Sehat-IntelVisualization/Dashboard1?:language=en&:display_count=y&:origin=viz_share_link"
    let options = {
        hideTabs: true,
        onFirstInteractive: () => {
        }
    }

    this.viz = new tableau.Viz(containerDiv, url, options)
  }

}
