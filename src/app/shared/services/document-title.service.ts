import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
/**
 * Document Title Service to update website title
 */
export class DocumentTitleService {

  constructor(private title: Title) { }

  /**
   * Set the value to update for the document title
   * @param title updated title for document
   */
  setTitle(title: string): void {
    this.title.setTitle(title);
  }
}
