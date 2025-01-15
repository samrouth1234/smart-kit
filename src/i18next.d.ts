// This file (i18next.d.ts) extends i18next's type definitions to include the custom resource type (Resources) defined in resources.d.ts.

import _ from "i18next";  // Importing i18next types

import Resources from "./resources";  // Importing the custom resource structure

declare module "i18next" {
  interface CustomTypeOptions {
    resources: Resources;  // Customizing the resources type
  }
}