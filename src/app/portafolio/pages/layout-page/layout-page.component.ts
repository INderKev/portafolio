import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrl: `layout-page.component.css`
})
export class LayoutPageComponent {

  public toolbarItems = [
    {label: 'about', icon: '?', url: './about'},
    {label: 'skills', icon: '?', url: './skills'},
    {label: 'projects', icon: '?', url: './projects'},
    {label: 'blog', icon: '?', url: './blog'},
    {label: 'contac me', icon: '?', url: './contac'},
  ]

}
