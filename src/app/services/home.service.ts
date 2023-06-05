import { Injectable } from '@angular/core';
import * as templates from '../../assets/data/templates.json';
import * as extendedTemplates from '../../assets/data/extendedTemplate.json';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  templates: any = (templates as any).default;
  extendedTemplates: any = (extendedTemplates as any).default;
  constructor() {

  }
  getTemplates() {
    return this.templates
  }
}
