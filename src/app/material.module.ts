import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    exports: [
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatSelectModule
    ]
})
export class MaterialModule { }