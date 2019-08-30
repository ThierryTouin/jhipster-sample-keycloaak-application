import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterSampleKeycloakApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterSampleKeycloakApplicationSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterSampleKeycloakApplicationSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleKeycloakApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterSampleKeycloakApplicationSharedModule
    };
  }
}
