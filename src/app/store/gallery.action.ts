import { createAction, props } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';

export const retrievedGalleryList = createAction(
  '[Gallery API] Gallery API Success',
  props<{ allGallery: GalleryModel[], galleryLength:number }>()
);

export const invokeGalleryAPI = createAction('[Gallery API] Invoke API');
