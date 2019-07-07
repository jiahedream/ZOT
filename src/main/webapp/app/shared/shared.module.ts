import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ZotSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ZotSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ZotSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ZotSharedModule {
  static forRoot() {
    return {
      ngModule: ZotSharedModule
    };
  }
}
