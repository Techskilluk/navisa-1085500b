import { VisaDocuments } from './document-types';
import { globalTalentRequirements, globalTalentResources } from './visa-requirements/global-talent';
import { highPotentialRequirements, highPotentialResources } from './visa-requirements/high-potential';
import { scaleUpRequirements, scaleUpResources } from './visa-requirements/scale-up';
import { techTalentRequirements, techTalentResources } from './visa-requirements/tech-talent';
import { healthcareRequirements, healthcareResources } from './visa-requirements/healthcare';
import { academicRequirements, academicResources } from './visa-requirements/academic';

export * from './document-types';

export const VISA_DOCUMENTS: VisaDocuments = {
  "global-talent": {
    requirements: globalTalentRequirements,
    resources: globalTalentResources
  },
  "high-potential": {
    requirements: highPotentialRequirements,
    resources: highPotentialResources
  },
  "scale-up": {
    requirements: scaleUpRequirements,
    resources: scaleUpResources
  },
  "tech-talent": {
    requirements: techTalentRequirements,
    resources: techTalentResources
  },
  "healthcare": {
    requirements: healthcareRequirements,
    resources: healthcareResources
  },
  "academic": {
    requirements: academicRequirements,
    resources: academicResources
  }
};