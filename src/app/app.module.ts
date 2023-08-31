import { NgModule } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
