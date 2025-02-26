import { Component, Input } from '@angular/core';
import { SpellDbc } from '@keira-types/spell-dbc.type';
import { FormGroup } from 'ngx-typesafe-forms';
import { Locale, SpellDbcTextFieldPrefix, SPELL_DBC_TEXT_FIELDS } from '../spell-dbc-texts.model';

@Component({
  selector: 'keira-spell-dbc-locale',
  templateUrl: './spell-dbc-locale.component.html',
})
export class SpellDbcLocaleComponent {
  readonly FIELDS = SPELL_DBC_TEXT_FIELDS;

  @Input() formGroup: FormGroup<SpellDbc>;
  @Input() locale: Locale;

  getFieldName(field: SpellDbcTextFieldPrefix): string {
    return `${field}_${this.locale}`; // example: NameSubtext_Lang_esES
  }
}
