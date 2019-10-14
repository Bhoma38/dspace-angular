import { Component } from '@angular/core';
import { metadataRepresentationComponent } from '../../../../shared/metadata-representation/metadata-representation.decorator';
import { MetadataRepresentationType } from '../../../../core/shared/metadata-representation/metadata-representation.model';
import { ItemMetadataRepresentation } from '../../../../core/shared/metadata-representation/item/item-metadata-representation.model';

@metadataRepresentationComponent('OrgUnit', MetadataRepresentationType.Item)
@Component({
  selector: 'ds-orgunit-item-page-list-element',
  templateUrl: './orgunit-item-page-list-element.component.html'
})
/**
 * The component for displaying a list element for an item of the type OrgUnit
 */
export class OrgunitItemPageListElementComponent {
  metadataRepresentation: ItemMetadataRepresentation;
}
