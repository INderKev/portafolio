import { NgModule } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { MaterialModule } from './../material/material.module';
import { Injectable } from '@angular/core';


@NgModule({
  imports: [
    MaterialModule,
  ]
})

@Injectable()
export class IconModule {

  private path: string = "../../assets/icons";

  constructor (
    private domSanitizer: DomSanitizer,
    public matIconRegistry: MatIconRegistry,
  ){
    this.matIconRegistry
    .addSvgIcon("github2", this.setPath(`${this.path}/github.svg`))
    .addSvgIcon("github", this.setPath(`${this.path}/github-mark-white.svg`));

  }

  private setPath( url:string ): SafeResourceUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
