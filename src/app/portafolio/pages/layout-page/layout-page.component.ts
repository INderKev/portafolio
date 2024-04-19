import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: `layout-page.component.css`
})
export class LayoutPageComponent {

  public linkeinUrl: string = "https://www.linkedin.com/in/kevin-culma-culma";
  public githubUrl: string = "https://github.com/INderKev";

  public toolbarItems = [
    {label: 'about', icon: '?', url: './about'},
    {label: 'skills', icon: '?', url: './skills'},
    {label: 'projects', icon: '?', url: './projects'},
    {label: 'contac', icon: '?', url: './contac'},
  ]

  public goGithub (): void{

  }

}
