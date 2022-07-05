import { createSelector } from '@ngrx/store';
import { GalleryModel } from '../gallery/gallery.model';

import { AppState } from './app.state';

export const gallerySelector =(state: AppState) => state.gallery;

export const uniqueAlbumIds = createSelector(
  gallerySelector,
  (gallery: GalleryModel[]) => {
    return [...new Set(gallery.map((_) => _.name))];
  }
);

export const albumCollectionByIndex = (index:number) => createSelector(
    gallerySelector,
    (gallery:GalleryModel[]) => {
        if(index == -1){
            return gallery;
        }
        return gallery.filter(_ => _.index == index);
    }
)
