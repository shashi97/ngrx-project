import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class GalleryService {
  constructor(private http: HttpClient) {}

  loadGallery() {
    return this.http
      .get('../../assets/images.json')
      .pipe(map((albums) => albums || []));
  }
}
