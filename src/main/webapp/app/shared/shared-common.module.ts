import { NgModule } from '@angular/core';

import { ZotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [ZotSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [ZotSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class ZotSharedCommonModule {}
