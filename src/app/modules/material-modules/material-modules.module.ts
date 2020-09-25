import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule, MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatMenuModule,
		MatIconModule,
		MatRippleModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSnackBarModule,
		MatProgressBarModule,
		MatExpansionModule,
		ScrollingModule
	],
	exports: [
		MatButtonModule,
		MatInputModule,
		MatFormFieldModule,
		MatTableModule,
		MatSortModule,
		MatPaginatorModule,
		MatMenuModule,
		MatIconModule,
		MatRippleModule,
		MatDialogModule,
		MatDatepickerModule,
		MatNativeDateModule,
		MatSnackBarModule,
		MatProgressBarModule,
		MatExpansionModule,
		ScrollingModule
	]
})
export class MaterialModulesModule {}
