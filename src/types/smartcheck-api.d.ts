/* eslint-disable */
/* spell-checker: disable */

// Auto generated from openapi spec using  https://www.npmjs.com/package/dtsgenerator
declare namespace SmartCheck {
  export interface $400 {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  export interface $401 {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  export interface $404 {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  export interface $409 {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  export interface $500 {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  export interface $503 {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  namespace Apiversion {
    export type XApiVersion = "2018-05-01";
  }
  namespace ChangePassword {
    export interface BodyParameters {
      request?: SmartCheck.ChangePassword.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ChangePassword.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The user's current password.
         *
         * example:
         * ThIsIsNoTaGoOdPaSsWoRd!
         */
        oldPassword?: string; // password
        /**
         * The user's new password.
         *
         * example:
         * ThIsIsNoTaBeTtErPaSsWoRd!
         */
        newPassword?: string; // password
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The user's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id: string;
        /**
         * The URL at which the user can be found.
         *
         * example:
         * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID: string;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role: string;
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * The time that the user was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the user was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  export interface ChangeUserPasswordRequest {
    /**
     * The user's current password.
     *
     * example:
     * ThIsIsNoTaGoOdPaSsWoRd!
     */
    oldPassword?: string; // password
    /**
     * The user's new password.
     *
     * example:
     * ThIsIsNoTaBeTtErPaSsWoRd!
     */
    newPassword?: string; // password
  }
  export interface ContentFindingOverride {
    /**
     * The unique ID assigned to this override.
     *
     * example:
     * 7a2f1d8c-7780-41d2-821b-7230005d4be8
     */
    id?: string;
    /**
     * The URL to the override.
     *
     * example:
     * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
     */
    href?: string;
    /**
     * The filename for the finding being overridden.
     *
     * example:
     * demo.pem
     */
    filename?: string;
    /**
     * The rule that is being is overridden. Use `*` to override findings for all rules.
     *
     * example:
     * private_keys_pem
     */
    rule?: string;
    /**
     * The image registry where the finding is overridden. Use `*` to override findings in all registries.
     *
     * example:
     * registry.example.com
     */
    registry?: string;
    /**
     * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
     *
     * example:
     * organization/project
     */
    repository?: string;
    /**
     * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
     *
     * example:
     * latest
     */
    tag?: string;
    /**
     * The time that the override was created.
     *
     * example:
     * 2019-03-01T00:00:00Z
     */
    created?: string; // date-time
    /**
     * The time that the override was last updated.
     *
     * example:
     * 2019-03-01T00:00:00Z
     */
    updated?: string; // date-time
    /**
     * The time that the override expires. If not present, the override will not expire.
     *
     * example:
     * 2019-04-01T00:00:00Z
     */
    expires?: string; // date-time
    /**
     * A free-form comment field for your notes.
     *
     * example:
     * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
     */
    comment?: string;
  }
  export interface ContentFindingOverrideRequest {
    /**
     * The filename for the finding being overridden.
     *
     * example:
     * demo.pem
     */
    filename?: string;
    /**
     * The rule that is being is overridden. Use `*` to override findings for all rules.
     *
     * example:
     * private_keys_pem
     */
    rule?: string;
    /**
     * The image registry where the finding is overridden. Use `*` to override findings in all registries.
     *
     * example:
     * registry.example.com
     */
    registry?: string;
    /**
     * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
     *
     * example:
     * organization/project
     */
    repository?: string;
    /**
     * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
     *
     * example:
     * latest
     */
    tag?: string;
    /**
     * The time that the override expires. If not present, the override will not expire.
     *
     * example:
     * 2019-04-01T00:00:00Z
     */
    expires?: string; // date-time
    /**
     * A free-form comment field for your notes.
     *
     * example:
     * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
     */
    comment?: string;
  }
  export interface ContentScanCollection {
    /**
     * The unique ID assigned to this content scan ruleset.
     *
     * example:
     * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
     */
    id: string;
    /**
     * The URL to the collection resource.
     *
     * example:
     * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
     */
    href: string;
    /**
     * The name of this collection.
     *
     * example:
     * Deep Security Smart Check Collection
     */
    name?: string;
    /**
     * True if this is the default collection used for content scans. There can only be one default collection at all time.
     *
     * example:
     * true
     */
    default: boolean;
    /**
     * The rulesets belonging to this collection.
     *
     */
    rulesets?: {
      /**
       * The unique ID assigned to this content scan ruleset.
       *
       * example:
       * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
       */
      id: string;
      /**
       * The name of this ruleset.
       *
       * example:
       * Scanning ruleset
       */
      name: string;
      /**
       * The URL to the ruleset resource.
       *
       * example:
       * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
       */
      href: string;
      /**
       * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
       *
       * example:
       * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
       */
      ruleset?: string;
      /**
       * If set to true, this ruleset will not be used for scan.
       *
       * example:
       * false
       */
      disabled?: boolean;
    }[];
  }
  export interface ContentScanCollectionRequest {
    /**
     * The name of this ruleset collection.
     *
     * example:
     * Smart Check collection
     */
    name: string;
    /**
     * The global ruleset collection used for content scan. There can only be one default ruleset collection at all time. If this value is true, the value of other collection will be reset to false.
     *
     * example:
     * true
     */
    default?: boolean;
    /**
     * The rulesets belonging to this collection.
     *
     */
    rulesets?: {
      /**
       * The name of this ruleset.
       *
       * example:
       * Scanning rule
       */
      name: string;
      /**
       * Base64-encoded yara rules.
       *
       * example:
       * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
       */
      ruleset: string;
      /**
       * If set to true, this ruleset will not be used for scan.
       *
       * example:
       * false
       */
      disabled?: boolean;
    }[];
  }
  export interface ContentScanCollectionRequestWithoutRulesets {
    /**
     * The name of this ruleset collection.
     *
     * example:
     * Smart Check collection
     */
    name: string;
    /**
     * The global ruleset collection used for content scan. There can only be one default ruleset collection at all time. If this value is true, the value of other collection will be reset to false.
     *
     * example:
     * true
     */
    default?: boolean;
  }
  export interface ContentScanResult {
    /**
     * The file where the issue was detected by content scanner.
     *
     * example:
     * path/to/file
     */
    filename: string;
    /**
     * The content scan name that matches the file content.
     *
     * example:
     * ssh_key_search_rsa
     */
    rule: string;
    /**
     * The URL to the ruleset resource.
     *
     * example:
     * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
     */
    ruleset: string;
    /**
     * The description of the content scan rule.
     *
     * example:
     * This is a rule.
     */
    description?: string;
    /**
     * example:
     * critical
     */
    severity?:
      | "defcon1"
      | "critical"
      | "high"
      | "medium"
      | "low"
      | "negligible"
      | "unknown";
    /**
     * The metadata of the content scan rule.
     *
     * example:
     * [object Object]
     */
    metadata?: {};
    /**
     * The tags of the content scan rule.
     *
     */
    tags?: string[];
    override?: {
      /**
       * The unique ID assigned to this override.
       *
       * example:
       * 7a2f1d8c-7780-41d2-821b-7230005d4be8
       */
      id?: string;
      /**
       * The URL to the override.
       *
       * example:
       * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
       */
      href?: string;
      /**
       * The filename for the finding being overridden.
       *
       * example:
       * demo.pem
       */
      filename?: string;
      /**
       * The rule that is being is overridden. Use `*` to override findings for all rules.
       *
       * example:
       * private_keys_pem
       */
      rule?: string;
      /**
       * The image registry where the finding is overridden. Use `*` to override findings in all registries.
       *
       * example:
       * registry.example.com
       */
      registry?: string;
      /**
       * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
       *
       * example:
       * organization/project
       */
      repository?: string;
      /**
       * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
       *
       * example:
       * latest
       */
      tag?: string;
      /**
       * The time that the override was created.
       *
       * example:
       * 2019-03-01T00:00:00Z
       */
      created?: string; // date-time
      /**
       * The time that the override was last updated.
       *
       * example:
       * 2019-03-01T00:00:00Z
       */
      updated?: string; // date-time
      /**
       * The time that the override expires. If not present, the override will not expire.
       *
       * example:
       * 2019-04-01T00:00:00Z
       */
      expires?: string; // date-time
      /**
       * A free-form comment field for your notes.
       *
       * example:
       * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
       */
      comment?: string;
    };
  }
  export interface ContentScanRuleset {
    /**
     * The unique ID assigned to this content scan ruleset.
     *
     * example:
     * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
     */
    id: string;
    /**
     * The name of this ruleset.
     *
     * example:
     * Scanning ruleset
     */
    name: string;
    /**
     * The URL to the ruleset resource.
     *
     * example:
     * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
     */
    href: string;
    /**
     * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
     *
     * example:
     * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
     */
    ruleset?: string;
    /**
     * If set to true, this ruleset will not be used for scan.
     *
     * example:
     * false
     */
    disabled?: boolean;
  }
  export interface ContentScanRulesetRequest {
    /**
     * The name of this ruleset.
     *
     * example:
     * Scanning rule
     */
    name: string;
    /**
     * Base64-encoded yara rules.
     *
     * example:
     * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
     */
    ruleset: string;
    /**
     * If set to true, this ruleset will not be used for scan.
     *
     * example:
     * false
     */
    disabled?: boolean;
  }
  namespace CreateCollection {
    export interface BodyParameters {
      request?: SmartCheck.CreateCollection.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateCollection.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name of this ruleset collection.
         *
         * example:
         * Smart Check collection
         */
        name: string;
        /**
         * The global ruleset collection used for content scan. There can only be one default ruleset collection at all time. If this value is true, the value of other collection will be reset to false.
         *
         * example:
         * true
         */
        default?: boolean;
        /**
         * The rulesets belonging to this collection.
         *
         */
        rulesets?: {
          /**
           * The name of this ruleset.
           *
           * example:
           * Scanning rule
           */
          name: string;
          /**
           * Base64-encoded yara rules.
           *
           * example:
           * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
           */
          ruleset: string;
          /**
           * If set to true, this ruleset will not be used for scan.
           *
           * example:
           * false
           */
          disabled?: boolean;
        }[];
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $201 {
        /**
         * The unique ID assigned to this content scan ruleset.
         *
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The URL to the collection resource.
         *
         * example:
         * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
         */
        href: string;
        /**
         * The name of this collection.
         *
         * example:
         * Deep Security Smart Check Collection
         */
        name?: string;
        /**
         * True if this is the default collection used for content scans. There can only be one default collection at all time.
         *
         * example:
         * true
         */
        default: boolean;
        /**
         * The rulesets belonging to this collection.
         *
         */
        rulesets?: {
          /**
           * The unique ID assigned to this content scan ruleset.
           *
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The name of this ruleset.
           *
           * example:
           * Scanning ruleset
           */
          name: string;
          /**
           * The URL to the ruleset resource.
           *
           * example:
           * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
           *
           * example:
           * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
           */
          ruleset?: string;
          /**
           * If set to true, this ruleset will not be used for scan.
           *
           * example:
           * false
           */
          disabled?: boolean;
        }[];
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateContentFindingOverride {
    export interface BodyParameters {
      request?: SmartCheck.CreateContentFindingOverride.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateContentFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The filename for the finding being overridden.
         *
         * example:
         * demo.pem
         */
        filename?: string;
        /**
         * The rule that is being is overridden. Use `*` to override findings for all rules.
         *
         * example:
         * private_keys_pem
         */
        rule?: string;
        /**
         * The image registry where the finding is overridden. Use `*` to override findings in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $201 {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The filename for the finding being overridden.
         *
         * example:
         * demo.pem
         */
        filename?: string;
        /**
         * The rule that is being is overridden. Use `*` to override findings for all rules.
         *
         * example:
         * private_keys_pem
         */
        rule?: string;
        /**
         * The image registry where the finding is overridden. Use `*` to override findings in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateRegistry {
    export interface BodyParameters {
      request?: SmartCheck.CreateRegistry.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateRegistry.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name to display for the registry. If not specified, the registry `host` value will be used as the initial name.
         *
         * example:
         * My Registry
         */
        name?: string;
        /**
         * A longer-form note to attach to the registry.
         *
         * example:
         * This registry is an example, and this description is similarly exemplary.
         *
         */
        description?: string;
        /**
         * The host where the registry can be found. Required except when using Amazon Elastic Container Registry.
         *
         * example:
         * registry.example.com
         */
        host?: string;
        /**
         * Credentials to use when accessing the registry.
         *
         */
        credentials?: {
          /**
           * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
           *
           * example:
           * username
           */
          username?: string;
          /**
           * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
           *
           * example:
           * ************
           */
          password?: string; // password
          /**
           * The AWS-specific information for authenticating to the registry.
           *
           */
          aws?: {
            /**
             * The AWS region identifier for the region where the registry is located.
             *
             * example:
             * us-east-1
             */
            region: string;
            /**
             * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
             *
             * example:
             * AKIAIOSFODNN7EXAMPLE
             */
            accessKeyID?: string;
            /**
             * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
             *
             * example:
             * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
             */
            secretAccessKey?: string;
            /**
             * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
             *
             * example:
             * arn:aws:iam::account-id:role/role-name
             */
            role?: string;
            /**
             * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
             *
             * example:
             * myExternalID
             */
            externalID?: string;
            /**
             * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
             *
             * example:
             * DeepSecuritySmartCheck
             */
            roleSessionName?: string; // ^[\w+=,.@-]*$
            /**
             * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
             *
             * example:
             * account-id
             */
            registry?: string;
          };
        };
        /**
         * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
         *
         * example:
         * [object Object]
         */
        filter?: {
          /**
           * A pattern to use when determining which images to synchronize (include) from the registry.
           *
           */
          include: string[];
          /**
           * A pattern to use when determining which images to synchronize (exclude) from the registry.
           *
           */
          exclude: string[];
        };
        /**
         * If `true`, this registry will be scheduled for daily re-scan.
         *
         */
        schedule?: boolean;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      /**
       * The registry object. Credentials will not be included in this object.
       *
       */
      export interface $200 {
        /**
         * The registry ID.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the registry can be found.
         *
         * example:
         * /api/registries/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * The name to display for the registry.
         *
         * example:
         * My Registry
         */
        name: string;
        /**
         * A longer-form note to attach to the registry.
         *
         * example:
         * This registry is an example, and this description is similarly exemplary.
         *
         */
        description?: string;
        /**
         * The host where the registry can be found.
         *
         * example:
         * registry.example.com
         */
        host?: string;
        /**
         * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
         *
         * example:
         * [object Object]
         */
        filter?: {
          /**
           * A pattern to use when determining which images to synchronize (include) from the registry.
           *
           */
          include: string[];
          /**
           * A pattern to use when determining which images to synchronize (exclude) from the registry.
           *
           */
          exclude: string[];
        };
        /**
         * Registry metrics.
         *
         */
        metrics?: {
          /**
           * Metrics capturing information about the content of the registry.
           *
           */
          content?: {
            /**
             * The number of repositories with content in the registry.
             *
             */
            repositories?: number;
            /**
             * The number of images in the registry.
             *
             */
            images?: number;
          };
          /**
           * Metrics capturing information about the scan status of images in the registry.
           *
           */
          scans?: {
            /**
             * The number of images in the registry that have not yet been scanned.
             *
             */
            pending?: number;
            /**
             * The number of images in the registry that are currently being scanned.
             *
             */
            inProgress?: number;
            /**
             * The number of images in the registry that have been scanned and have had no findings.
             *
             */
            ok?: number;
            /**
             * The number of images in the registry that have been scanned and have had findings.
             *
             */
            warnings?: number;
            /**
             * The number of images in the registry that have been scanned and have encountered errors during the scan.
             *
             */
            errors?: number;
          };
          findings?: {
            /**
             * Metadata about the scanners that produced the results.
             *
             */
            scanners?: {
              /**
               * Metadata for the malware scanner.
               *
               */
              malware?: {
                /**
                 * Availability of the malware scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the malware pattern database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
                versions?: {
                  /**
                   * The ICRC pattern version.
                   *
                   */
                  icrc?: string;
                  /**
                   * The TrendX pattern version.
                   *
                   */
                  trendX?: string;
                  /**
                   * The malware blacklist pattern version.
                   *
                   */
                  blacklist?: string;
                };
              };
              /**
               * Metadata for the vulnerability scanner.
               *
               */
              vulnerabilities?: {
                /**
                 * Availability of the vulnerability scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerabilities database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
              /**
               * Metadata for the vulnerability pattern scanner.
               *
               */
              vulnerabilityPatterns?: {
                /**
                 * Availability of the vulnerability pattern scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerability patterns were last published.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                date?: string; // date-time
                /**
                 * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
            };
            /**
             * The number of malware items that were found.
             * high:
             *
             */
            malware?: number;
            /**
             * The number of content findings found by severity.
             *
             */
            contents?: {
              /**
               * The total number of content findings categorized by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
            /**
             * The number of vulnerabilities found by severity.
             *
             */
            vulnerabilities?: {
              /**
               * The total number of vulnerabilities that were found by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
          };
          /**
           * Aggregate metrics over a period of time.
           *
           */
          history?: {
            /**
             * Metrics over the past 24 hours.
             *
             */
            "1d"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
            /**
             * Metrics over the past 7 days.
             *
             */
            "1w"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
          };
        };
        /**
         * If `true`, this registry will be scheduled for daily re-scan.
         *
         */
        schedule?: boolean;
        /**
         * Reports the status of the connection from Deep Security Smart Check to the registry.
         * * `pending`: Deep Security Smart Check has not yet attempted to connect to the registry
         * * `ok`: The last connection attempt to the registry was successful.
         * * `failed`: The last connection attempt to the registry failed.
         *
         * example:
         * pending
         */
        status: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        statusDetail?: string;
        /**
         * The time that the registry connection was created.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the registry connection was last modified.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        updated: string; // datetime
      }
      /**
       * The registry object. Credentials will not be included in this object.
       *
       */
      export interface $201 {
        /**
         * The registry ID.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the registry can be found.
         *
         * example:
         * /api/registries/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * The name to display for the registry.
         *
         * example:
         * My Registry
         */
        name: string;
        /**
         * A longer-form note to attach to the registry.
         *
         * example:
         * This registry is an example, and this description is similarly exemplary.
         *
         */
        description?: string;
        /**
         * The host where the registry can be found.
         *
         * example:
         * registry.example.com
         */
        host?: string;
        /**
         * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
         *
         * example:
         * [object Object]
         */
        filter?: {
          /**
           * A pattern to use when determining which images to synchronize (include) from the registry.
           *
           */
          include: string[];
          /**
           * A pattern to use when determining which images to synchronize (exclude) from the registry.
           *
           */
          exclude: string[];
        };
        /**
         * Registry metrics.
         *
         */
        metrics?: {
          /**
           * Metrics capturing information about the content of the registry.
           *
           */
          content?: {
            /**
             * The number of repositories with content in the registry.
             *
             */
            repositories?: number;
            /**
             * The number of images in the registry.
             *
             */
            images?: number;
          };
          /**
           * Metrics capturing information about the scan status of images in the registry.
           *
           */
          scans?: {
            /**
             * The number of images in the registry that have not yet been scanned.
             *
             */
            pending?: number;
            /**
             * The number of images in the registry that are currently being scanned.
             *
             */
            inProgress?: number;
            /**
             * The number of images in the registry that have been scanned and have had no findings.
             *
             */
            ok?: number;
            /**
             * The number of images in the registry that have been scanned and have had findings.
             *
             */
            warnings?: number;
            /**
             * The number of images in the registry that have been scanned and have encountered errors during the scan.
             *
             */
            errors?: number;
          };
          findings?: {
            /**
             * Metadata about the scanners that produced the results.
             *
             */
            scanners?: {
              /**
               * Metadata for the malware scanner.
               *
               */
              malware?: {
                /**
                 * Availability of the malware scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the malware pattern database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
                versions?: {
                  /**
                   * The ICRC pattern version.
                   *
                   */
                  icrc?: string;
                  /**
                   * The TrendX pattern version.
                   *
                   */
                  trendX?: string;
                  /**
                   * The malware blacklist pattern version.
                   *
                   */
                  blacklist?: string;
                };
              };
              /**
               * Metadata for the vulnerability scanner.
               *
               */
              vulnerabilities?: {
                /**
                 * Availability of the vulnerability scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerabilities database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
              /**
               * Metadata for the vulnerability pattern scanner.
               *
               */
              vulnerabilityPatterns?: {
                /**
                 * Availability of the vulnerability pattern scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerability patterns were last published.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                date?: string; // date-time
                /**
                 * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
            };
            /**
             * The number of malware items that were found.
             * high:
             *
             */
            malware?: number;
            /**
             * The number of content findings found by severity.
             *
             */
            contents?: {
              /**
               * The total number of content findings categorized by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
            /**
             * The number of vulnerabilities found by severity.
             *
             */
            vulnerabilities?: {
              /**
               * The total number of vulnerabilities that were found by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
          };
          /**
           * Aggregate metrics over a period of time.
           *
           */
          history?: {
            /**
             * Metrics over the past 24 hours.
             *
             */
            "1d"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
            /**
             * Metrics over the past 7 days.
             *
             */
            "1w"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
          };
        };
        /**
         * If `true`, this registry will be scheduled for daily re-scan.
         *
         */
        schedule?: boolean;
        /**
         * Reports the status of the connection from Deep Security Smart Check to the registry.
         * * `pending`: Deep Security Smart Check has not yet attempted to connect to the registry
         * * `ok`: The last connection attempt to the registry was successful.
         * * `failed`: The last connection attempt to the registry failed.
         *
         * example:
         * pending
         */
        status: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        statusDetail?: string;
        /**
         * The time that the registry connection was created.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the registry connection was last modified.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateRole {
    export interface BodyParameters {
      request?: SmartCheck.CreateRole.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateRole.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The role's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the role can be found.
         *
         * example:
         * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
        /**
         * The time that the role was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the role was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $201 {
        /**
         * The role's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the role can be found.
         *
         * example:
         * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
        /**
         * The time that the role was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the role was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateRuleset {
    export interface BodyParameters {
      request?: SmartCheck.CreateRuleset.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateRuleset.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name of this ruleset.
         *
         * example:
         * Scanning rule
         */
        name: string;
        /**
         * Base64-encoded yara rules.
         *
         * example:
         * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
         */
        ruleset: string;
        /**
         * If set to true, this ruleset will not be used for scan.
         *
         * example:
         * false
         */
        disabled?: boolean;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $201 {
        /**
         * The unique ID assigned to this content scan ruleset.
         *
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The name of this ruleset.
         *
         * example:
         * Scanning ruleset
         */
        name: string;
        /**
         * The URL to the ruleset resource.
         *
         * example:
         * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        href: string;
        /**
         * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
         *
         * example:
         * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
         */
        ruleset?: string;
        /**
         * If set to true, this ruleset will not be used for scan.
         *
         * example:
         * false
         */
        disabled?: boolean;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateSAMLIdentityProvider {
    export interface BodyParameters {
      request?: SmartCheck.CreateSAMLIdentityProvider.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateSAMLIdentityProvider.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The SAML identity provider's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the SAML identity provider can be found.
         *
         * example:
         * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * A name for the SAML identity provider.
         *
         * example:
         * MyIdentityProvider
         */
        name?: string;
        /**
         * (optional, default: `null`) A description for the SAML identity provider.
         *
         * example:
         * My identity provider. Contact me@example.com for support.
         */
        description?: string;
        /**
         * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.
         *
         * example:
         * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
         */
        metadataURL?: string;
        /**
         * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided metadata XML for the identity provider. Only one of `metadataURL` and `metadataXML` should be present.
         *
         * example:
         * PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxFbnRpdHlEZXNjcmlwdG9yLi4uCg==
         */
        metadataXML?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The SAML identity provider's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the SAML identity provider can be found.
         *
         * example:
         * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * A name for the SAML identity provider.
         *
         * example:
         * MyIdentityProvider
         */
        name?: string;
        /**
         * (optional, default: `null`) A description for the SAML identity provider.
         *
         * example:
         * My identity provider. Contact me@example.com for support.
         */
        description?: string;
        /**
         * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.  If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
         *
         * example:
         * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
         */
        metadataURL?: string;
        /**
         * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The time that the identity provider's certificate will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        validUntil?: string; // datetime
        /**
         * Overall status of the identity provider. If the status is `failed`, the `detail` attribute will have more information.
         *
         * example:
         * ok
         */
        status?: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        detail?: "connection-failed" | "invalid-metadata";
        /**
         * The time that the identity provider was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the identity provider was last modified. If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
      }
      export interface $201 {
        /**
         * The SAML identity provider's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the SAML identity provider can be found.
         *
         * example:
         * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * A name for the SAML identity provider.
         *
         * example:
         * MyIdentityProvider
         */
        name?: string;
        /**
         * (optional, default: `null`) A description for the SAML identity provider.
         *
         * example:
         * My identity provider. Contact me@example.com for support.
         */
        description?: string;
        /**
         * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.  If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
         *
         * example:
         * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
         */
        metadataURL?: string;
        /**
         * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The time that the identity provider's certificate will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        validUntil?: string; // datetime
        /**
         * Overall status of the identity provider. If the status is `failed`, the `detail` attribute will have more information.
         *
         * example:
         * ok
         */
        status?: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        detail?: "connection-failed" | "invalid-metadata";
        /**
         * The time that the identity provider was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the identity provider was last modified. If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateScan {
    export interface BodyParameters {
      request?: SmartCheck.CreateScan.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateScan.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * (optional) A descriptive name for the scan.
         *
         * example:
         * (optional) a descriptive string
         */
        name?: string;
        /**
         * The source of the image to scan.
         *
         */
        source: {
          type: "docker";
          /**
           * (for scan type `docker` only) The registry hostname or IP address.
           *
           * example:
           * registry.example.com
           */
          registry?: string;
          /**
           * (for scan type `docker` only) The repository name.
           *
           * example:
           * organization/project
           */
          repository?: string;
          /**
           * (for scan type `docker` only) The tag of the image to scan.
           *
           * example:
           * latest
           */
          tag?: string;
          /**
           * (for scan type `docker` only) The digest value of the image to scan.
           *
           * example:
           * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
           */
          digest?: string;
          credentials?: {
            /**
             * (optional) Use this if your source requires requests to be authorized using a bearer token. Requests will include an `Authorization: Bearer {token}` header.
             *
             * example:
             * 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
             */
            token?: string;
            /**
             * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
             *
             * example:
             * username
             */
            username?: string;
            /**
             * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
             *
             * example:
             * ************
             */
            password?: string; // password
            /**
             * The AWS-specific information for authenticating to the registry.
             *
             */
            aws?: {
              /**
               * The AWS region identifier for the region where the registry is located.
               *
               * example:
               * us-east-1
               */
              region: string;
              /**
               * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
               *
               * example:
               * AKIAIOSFODNN7EXAMPLE
               */
              accessKeyID?: string;
              /**
               * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
               *
               * example:
               * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
               */
              secretAccessKey?: string;
              /**
               * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
               *
               * example:
               * arn:aws:iam::account-id:role/role-name
               */
              role?: string;
              /**
               * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
               *
               * example:
               * myExternalID
               */
              externalID?: string;
              /**
               * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
               *
               * example:
               * DeepSecuritySmartCheck
               */
              roleSessionName?: string; // ^[\w+=,.@-]*$
              /**
               * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
               *
               * example:
               * account-id
               */
              registry?: string;
            };
          };
          /**
           * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS source requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, source requests will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
        };
        /**
         * (optional) A list of web hooks to call when events happen for the scan.
         *
         */
        webhooks?: {
          /**
           * (optional) A descriptive name for the web hook.
           *
           * example:
           * (optional) a descriptive string
           */
          name?: string;
          /**
           * The URL that Deep Security Smart Check should `POST` the event payload to.
           *
           * example:
           * https://target.example.com/
           */
          hookURL: string;
          /**
           * (optional) You can include your own headers in the web hook request. Use these to provide additional context or authentication information to your web hook receiver.
           *
           */
          headers?: {
            /**
             * The header name.
             * example:
             * Authorization
             */
            name: string;
            /**
             * The header value.
             * example:
             * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
             */
            value: string;
          }[];
          /**
           * (optional) If you provide a `secret` value, then events sent over HTTP will include an `X-Scan-Event-Signature` header that is the SHA-256 HMAC of the event body using your secret as the key.
           *
           * *This value is write-only: the API will not return the secret or show that it has been set.*
           *
           * example:
           * tHiSiSaBaDsEcReT
           */
          secret?: string; // password
          /**
           * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
          /**
           * (optional, default: `false`). If `true`, the web hook will be invoked whenever a matching event occurs.
           *
           * example:
           * true
           */
          active?: boolean;
          /**
           * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
           *
           */
          events?: (
            | "scan-requested"
            | "scan-started"
            | "scan-completed"
            | "*")[];
        }[];
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this scan.
         *
         */
        id: string;
        /**
         * The URL to the scan resource.
         *
         * example:
         * /api/scans/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
         */
        href: string;
        /**
         * If you provided a name for the scan, it will be returned here.
         *
         */
        name: string;
        source?: {
          type: "docker";
          /**
           * (for scan type `docker` only) The registry hostname or IP address.
           *
           * example:
           * registry.example.com
           */
          registry?: string;
          /**
           * (for scan type `docker` only) The repository name.
           *
           * example:
           * organization/project
           */
          repository?: string;
          /**
           * (for scan type `docker` only) The tag of the image to scan.
           *
           * example:
           * latest
           */
          tag?: string;
          /**
           * (for scan type `docker` only) The digest value of the image to scan.
           *
           * example:
           * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
           */
          digest?: string;
          /**
           * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
        };
        status:
          | "pending"
          | "in-progress"
          | "completed-with-findings"
          | "completed-no-findings"
          | "failed";
        details?: {
          /**
           * (optional) More details about the scan status.
           *
           * example:
           * More details about the scan status
           */
          detail?: string;
          /**
           * The time that the scan was requested.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          requested: string; // date-time
          /**
           * The time that the scan started. This value will not be present if the scan has not yet started.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          started?: string; // date-time
          /**
           * The time that the scan was last updated. This value will not be present if the scan has not yet started.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          /**
           * The time that the scan completed. This value will not be present if the scan has not yet completed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          completed?: string; // date-time
          /**
           * The image digest for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * sha256:43ea500473edb96e079fe23aba62d60e09c11d4c4714ca284d50b80e064c05e3
           */
          digest?: string;
          /**
           * The target operating system for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * linux
           */
          os?: string;
          /**
           * The target architecture for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * amd64
           */
          architecture?: string;
          /**
           * The labels associated with the scanned image. This value will only be present for Docker scans.
           * example:
           * [object Object]
           */
          labels?: {
            [name: string]: string;
          };
          results: {
            /**
             * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
             *
             * example:
             * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
             */
            id?: string;
            /**
             * For scans of Docker images, this attribute will show the time at which the layer was created.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            createdAt?: string; // date-time
            /**
             * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
             *
             * example:
             * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
             */
            createdBy?: string;
            /**
             * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
             *
             */
            malware?: string;
            /**
             * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
             *
             */
            vulnerabilities?: string;
            /**
             * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
             *
             */
            contents?: string;
            findings?: {
              /**
               * Metadata about the scanners that produced the results.
               *
               */
              scanners?: {
                /**
                 * Metadata for the malware scanner.
                 *
                 */
                malware?: {
                  /**
                   * Availability of the malware scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the malware pattern database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                  versions?: {
                    /**
                     * The ICRC pattern version.
                     *
                     */
                    icrc?: string;
                    /**
                     * The TrendX pattern version.
                     *
                     */
                    trendX?: string;
                    /**
                     * The malware blacklist pattern version.
                     *
                     */
                    blacklist?: string;
                  };
                };
                /**
                 * Metadata for the vulnerability scanner.
                 *
                 */
                vulnerabilities?: {
                  /**
                   * Availability of the vulnerability scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerabilities database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
                /**
                 * Metadata for the vulnerability pattern scanner.
                 *
                 */
                vulnerabilityPatterns?: {
                  /**
                   * Availability of the vulnerability pattern scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerability patterns were last published.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  date?: string; // date-time
                  /**
                   * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
              };
              /**
               * The number of malware items that were found.
               * high:
               *
               */
              malware?: number;
              /**
               * The number of content findings found by severity.
               *
               */
              contents?: {
                /**
                 * The total number of content findings categorized by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
              /**
               * The number of vulnerabilities found by severity.
               *
               */
              vulnerabilities?: {
                /**
                 * The total number of vulnerabilities that were found by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
            };
          }[];
        };
        findings?: {
          /**
           * Metadata about the scanners that produced the results.
           *
           */
          scanners?: {
            /**
             * Metadata for the malware scanner.
             *
             */
            malware?: {
              /**
               * Availability of the malware scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the malware pattern database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
              versions?: {
                /**
                 * The ICRC pattern version.
                 *
                 */
                icrc?: string;
                /**
                 * The TrendX pattern version.
                 *
                 */
                trendX?: string;
                /**
                 * The malware blacklist pattern version.
                 *
                 */
                blacklist?: string;
              };
            };
            /**
             * Metadata for the vulnerability scanner.
             *
             */
            vulnerabilities?: {
              /**
               * Availability of the vulnerability scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerabilities database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
            /**
             * Metadata for the vulnerability pattern scanner.
             *
             */
            vulnerabilityPatterns?: {
              /**
               * Availability of the vulnerability pattern scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerability patterns were last published.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              date?: string; // date-time
              /**
               * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
          };
          /**
           * The number of malware items that were found.
           * high:
           *
           */
          malware?: number;
          /**
           * The number of content findings found by severity.
           *
           */
          contents?: {
            /**
             * The total number of content findings categorized by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
          /**
           * The number of vulnerabilities found by severity.
           *
           */
          vulnerabilities?: {
            /**
             * The total number of vulnerabilities that were found by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
        };
      }
      export interface $201 {
        /**
         * The unique ID assigned to this scan.
         *
         */
        id: string;
        /**
         * The URL to the scan resource.
         *
         * example:
         * /api/scans/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
         */
        href: string;
        /**
         * If you provided a name for the scan, it will be returned here.
         *
         */
        name: string;
        source?: {
          type: "docker";
          /**
           * (for scan type `docker` only) The registry hostname or IP address.
           *
           * example:
           * registry.example.com
           */
          registry?: string;
          /**
           * (for scan type `docker` only) The repository name.
           *
           * example:
           * organization/project
           */
          repository?: string;
          /**
           * (for scan type `docker` only) The tag of the image to scan.
           *
           * example:
           * latest
           */
          tag?: string;
          /**
           * (for scan type `docker` only) The digest value of the image to scan.
           *
           * example:
           * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
           */
          digest?: string;
          /**
           * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
        };
        status:
          | "pending"
          | "in-progress"
          | "completed-with-findings"
          | "completed-no-findings"
          | "failed";
        details?: {
          /**
           * (optional) More details about the scan status.
           *
           * example:
           * More details about the scan status
           */
          detail?: string;
          /**
           * The time that the scan was requested.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          requested: string; // date-time
          /**
           * The time that the scan started. This value will not be present if the scan has not yet started.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          started?: string; // date-time
          /**
           * The time that the scan was last updated. This value will not be present if the scan has not yet started.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          /**
           * The time that the scan completed. This value will not be present if the scan has not yet completed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          completed?: string; // date-time
          /**
           * The image digest for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * sha256:43ea500473edb96e079fe23aba62d60e09c11d4c4714ca284d50b80e064c05e3
           */
          digest?: string;
          /**
           * The target operating system for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * linux
           */
          os?: string;
          /**
           * The target architecture for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * amd64
           */
          architecture?: string;
          /**
           * The labels associated with the scanned image. This value will only be present for Docker scans.
           * example:
           * [object Object]
           */
          labels?: {
            [name: string]: string;
          };
          results: {
            /**
             * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
             *
             * example:
             * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
             */
            id?: string;
            /**
             * For scans of Docker images, this attribute will show the time at which the layer was created.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            createdAt?: string; // date-time
            /**
             * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
             *
             * example:
             * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
             */
            createdBy?: string;
            /**
             * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
             *
             */
            malware?: string;
            /**
             * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
             *
             */
            vulnerabilities?: string;
            /**
             * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
             *
             */
            contents?: string;
            findings?: {
              /**
               * Metadata about the scanners that produced the results.
               *
               */
              scanners?: {
                /**
                 * Metadata for the malware scanner.
                 *
                 */
                malware?: {
                  /**
                   * Availability of the malware scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the malware pattern database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                  versions?: {
                    /**
                     * The ICRC pattern version.
                     *
                     */
                    icrc?: string;
                    /**
                     * The TrendX pattern version.
                     *
                     */
                    trendX?: string;
                    /**
                     * The malware blacklist pattern version.
                     *
                     */
                    blacklist?: string;
                  };
                };
                /**
                 * Metadata for the vulnerability scanner.
                 *
                 */
                vulnerabilities?: {
                  /**
                   * Availability of the vulnerability scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerabilities database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
                /**
                 * Metadata for the vulnerability pattern scanner.
                 *
                 */
                vulnerabilityPatterns?: {
                  /**
                   * Availability of the vulnerability pattern scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerability patterns were last published.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  date?: string; // date-time
                  /**
                   * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
              };
              /**
               * The number of malware items that were found.
               * high:
               *
               */
              malware?: number;
              /**
               * The number of content findings found by severity.
               *
               */
              contents?: {
                /**
                 * The total number of content findings categorized by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
              /**
               * The number of vulnerabilities found by severity.
               *
               */
              vulnerabilities?: {
                /**
                 * The total number of vulnerabilities that were found by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
            };
          }[];
        };
        findings?: {
          /**
           * Metadata about the scanners that produced the results.
           *
           */
          scanners?: {
            /**
             * Metadata for the malware scanner.
             *
             */
            malware?: {
              /**
               * Availability of the malware scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the malware pattern database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
              versions?: {
                /**
                 * The ICRC pattern version.
                 *
                 */
                icrc?: string;
                /**
                 * The TrendX pattern version.
                 *
                 */
                trendX?: string;
                /**
                 * The malware blacklist pattern version.
                 *
                 */
                blacklist?: string;
              };
            };
            /**
             * Metadata for the vulnerability scanner.
             *
             */
            vulnerabilities?: {
              /**
               * Availability of the vulnerability scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerabilities database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
            /**
             * Metadata for the vulnerability pattern scanner.
             *
             */
            vulnerabilityPatterns?: {
              /**
               * Availability of the vulnerability pattern scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerability patterns were last published.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              date?: string; // date-time
              /**
               * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
          };
          /**
           * The number of malware items that were found.
           * high:
           *
           */
          malware?: number;
          /**
           * The number of content findings found by severity.
           *
           */
          contents?: {
            /**
             * The total number of content findings categorized by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
          /**
           * The number of vulnerabilities found by severity.
           *
           */
          vulnerabilities?: {
            /**
             * The total number of vulnerabilities that were found by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
        };
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateSession {
    export interface BodyParameters {
      request?: SmartCheck.CreateSession.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateSession.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The user to create a session for.
         *
         */
        user?: {
          /**
           * The user's ID.
           *
           * example:
           * alice
           */
          userID: string;
          /**
           * The user's password.
           *
           * example:
           * ThIsIsNoTaGoOdPaSsWoRd!
           */
          password: string; // password
        };
        /**
         * The SAML response to create a session for.
         *
         */
        saml?: {
          /**
           * The Base64-encoded SAML response.
           *
           * example:
           * PFJlc3BvbnNlPi4uLgo=
           */
          response: string;
          /**
           * If multiple role claims are present in the SAML response, set `selectedRole` to the role value that you want to assume for this session. Required if multiple role claims are present in the SAML response.
           *
           * example:
           * administrator
           */
          selectedRole?: string;
        };
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The session's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the session can be found.
         *
         * example:
         * /api/sessions/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        user?: {
          /**
           * The user's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id: string;
          /**
           * The URL at which the user can be found.
           *
           * example:
           * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href: string;
          /**
           * A unique name for the user.
           *
           * example:
           * alice
           */
          userID: string;
          /**
           * A display name for the user.
           *
           * example:
           * Alice Panoptes
           */
          name?: string;
          /**
           * A description for the user.
           *
           * example:
           * Guardian of the heifer Io.
           */
          description?: string;
          /**
           * The user's role identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          role: string;
          /**
           * If `true`, the user will not be able to perform any actions until they change their password.
           *
           * example:
           * false
           */
          passwordChangeRequired?: boolean;
          /**
           * The time that the user was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the user was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated: string; // datetime
        };
        /**
         * The session token. Use the session token the `Authorization` header of subsequent requests: ```Authorization: Bearer SAMPLEeyJhbGciOiJSUz...```
         *
         * example:
         * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.AzuEel-o9NFJyTvfHx49jMZ-iwU-4NqMQduhUFvWKXXL2ZmMD1Id2ePFU-0ut-esku2avobI7uVDtfEbO6C-Zrn2S4cwsRHnUBCqgzcGwAFr4lHSGi8eAkMSn7b_ceNQu4aGAtDAnCNv3An3U9JUeq29Lze5Md5TTMUSZkFUZR15bJmSKgnd3GvAsIFyIbORmhs2Fe5E9q8jnuSFaeTvvRnlW48Po6bKC09MEhelrES5nnA2tLBu_hMB8VVaDjG7veOtLXrgkH7_6SdBDFZ8Yma_rgA0AwrtYtfQyNunVKctjDq0BE1OPNCJ45n1Cyr7i2TosnYwQUm-v1tX2LZn6g
         */
        token?: string;
        /**
         * The time that the session was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the session was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
        /**
         * The time that the session will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        expires?: string; // datetime
        /**
         * The session name provided for this session. SAML identity providers can set this by including a `RoleSessionName` claim in the SAML response.
         *
         * example:
         * alice
         */
        roleSessionName?: string;
      }
      export interface $201 {
        /**
         * The session's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the session can be found.
         *
         * example:
         * /api/sessions/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        user?: {
          /**
           * The user's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id: string;
          /**
           * The URL at which the user can be found.
           *
           * example:
           * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href: string;
          /**
           * A unique name for the user.
           *
           * example:
           * alice
           */
          userID: string;
          /**
           * A display name for the user.
           *
           * example:
           * Alice Panoptes
           */
          name?: string;
          /**
           * A description for the user.
           *
           * example:
           * Guardian of the heifer Io.
           */
          description?: string;
          /**
           * The user's role identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          role: string;
          /**
           * If `true`, the user will not be able to perform any actions until they change their password.
           *
           * example:
           * false
           */
          passwordChangeRequired?: boolean;
          /**
           * The time that the user was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the user was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated: string; // datetime
        };
        /**
         * The session token. Use the session token the `Authorization` header of subsequent requests: ```Authorization: Bearer SAMPLEeyJhbGciOiJSUz...```
         *
         * example:
         * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.AzuEel-o9NFJyTvfHx49jMZ-iwU-4NqMQduhUFvWKXXL2ZmMD1Id2ePFU-0ut-esku2avobI7uVDtfEbO6C-Zrn2S4cwsRHnUBCqgzcGwAFr4lHSGi8eAkMSn7b_ceNQu4aGAtDAnCNv3An3U9JUeq29Lze5Md5TTMUSZkFUZR15bJmSKgnd3GvAsIFyIbORmhs2Fe5E9q8jnuSFaeTvvRnlW48Po6bKC09MEhelrES5nnA2tLBu_hMB8VVaDjG7veOtLXrgkH7_6SdBDFZ8Yma_rgA0AwrtYtfQyNunVKctjDq0BE1OPNCJ45n1Cyr7i2TosnYwQUm-v1tX2LZn6g
         */
        token?: string;
        /**
         * The time that the session was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the session was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
        /**
         * The time that the session will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        expires?: string; // datetime
        /**
         * The session name provided for this session. SAML identity providers can set this by including a `RoleSessionName` claim in the SAML response.
         *
         * example:
         * alice
         */
        roleSessionName?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateUser {
    export interface BodyParameters {
      request?: SmartCheck.CreateUser.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateUser.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID?: string;
        /**
         * A password for the user.
         *
         * example:
         * ThIsIsNoTaGoOdPaSsWoRd!
         */
        password?: string; // password
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role ID.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The user's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id: string;
        /**
         * The URL at which the user can be found.
         *
         * example:
         * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID: string;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role: string;
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * The time that the user was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the user was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $201 {
        /**
         * The user's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id: string;
        /**
         * The URL at which the user can be found.
         *
         * example:
         * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID: string;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role: string;
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * The time that the user was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the user was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateVulnerabilityFindingOverride {
    export interface BodyParameters {
      request?: SmartCheck.CreateVulnerabilityFindingOverride.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateVulnerabilityFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name of the vulnerability being overridden.
         *
         * example:
         * CVE-2019-00000
         */
        name?: string;
        /**
         * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
         *
         * example:
         * sample-package
         */
        package?: string;
        /**
         * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
         *
         * example:
         * 0.0.1
         */
        version?: string;
        /**
         * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $201 {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The name of the vulnerability being overridden.
         *
         * example:
         * CVE-2019-00000
         */
        name?: string;
        /**
         * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
         *
         * example:
         * sample-package
         */
        package?: string;
        /**
         * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
         *
         * example:
         * 0.0.1
         */
        version?: string;
        /**
         * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateWebhook {
    export interface BodyParameters {
      request?: SmartCheck.CreateWebhook.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateWebhook.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * (optional) A descriptive name for the web hook.
         *
         * example:
         * (optional) a descriptive string
         */
        name?: string;
        /**
         * The URL that Deep Security Smart Check should `POST` the event payload to.
         *
         * example:
         * https://target.example.com/
         */
        hookURL: string;
        /**
         * (optional) You can include your own headers in the web hook request. Use these to provide additional context or authentication information to your web hook receiver.
         *
         */
        headers?: {
          /**
           * The header name.
           * example:
           * Authorization
           */
          name: string;
          /**
           * The header value.
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * (optional) If you provide a `secret` value, then events sent over HTTP will include an `X-Scan-Event-Signature` header that is the SHA-256 HMAC of the event body using your secret as the key.
         *
         * *This value is write-only: the API will not return the secret or show that it has been set.*
         *
         * example:
         * tHiSiSaBaDsEcReT
         */
        secret?: string; // password
        /**
         * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * (optional, default: `false`). If `true`, the web hook will be invoked whenever a matching event occurs.
         *
         * example:
         * true
         */
        active?: boolean;
        /**
         * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
         *
         */
        events?: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The URL at which the web hook can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href: string;
        /**
         * (optional) A descriptive name for the web hook.
         *
         * example:
         * (optional) a descriptive string
         */
        name: string;
        /**
         * example:
         * https://target.example.com/
         */
        hookURL: string;
        headers: {
          /**
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL at which the web hook header can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * example:
           * Authorization
           */
          name: string;
          /**
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * example:
         * true
         */
        active: boolean;
        /**
         * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
         *
         */
        events: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // date-time
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      }
      export interface $201 {
        /**
         * The URL at which the web hook can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href: string;
        /**
         * (optional) A descriptive name for the web hook.
         *
         * example:
         * (optional) a descriptive string
         */
        name: string;
        /**
         * example:
         * https://target.example.com/
         */
        hookURL: string;
        headers: {
          /**
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL at which the web hook header can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * example:
           * Authorization
           */
          name: string;
          /**
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * example:
         * true
         */
        active: boolean;
        /**
         * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
         *
         */
        events: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // date-time
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace CreateWebhookHeader {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.CreateWebhookHeader.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The URL at which the web hook header can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        href: string;
        /**
         * example:
         * Authorization
         */
        name: string;
        /**
         * example:
         * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
         */
        value: string;
      }
      export interface $201 {
        /**
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The URL at which the web hook header can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        href: string;
        /**
         * example:
         * Authorization
         */
        name: string;
        /**
         * example:
         * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
         */
        value: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  export interface Credentials {
    /**
     * (optional) Use this if your source requires requests to be authorized using a bearer token. Requests will include an `Authorization: Bearer {token}` header.
     *
     * example:
     * 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
     */
    token?: string;
    /**
     * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
     *
     * example:
     * username
     */
    username?: string;
    /**
     * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
     *
     * example:
     * ************
     */
    password?: string; // password
    /**
     * The AWS-specific information for authenticating to the registry.
     *
     */
    aws?: {
      /**
       * The AWS region identifier for the region where the registry is located.
       *
       * example:
       * us-east-1
       */
      region: string;
      /**
       * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
       *
       * example:
       * AKIAIOSFODNN7EXAMPLE
       */
      accessKeyID?: string;
      /**
       * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
       *
       * example:
       * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
       */
      secretAccessKey?: string;
      /**
       * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
       *
       * example:
       * arn:aws:iam::account-id:role/role-name
       */
      role?: string;
      /**
       * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
       *
       * example:
       * myExternalID
       */
      externalID?: string;
      /**
       * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
       *
       * example:
       * DeepSecuritySmartCheck
       */
      roleSessionName?: string; // ^[\w+=,.@-]*$
      /**
       * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
       *
       * example:
       * account-id
       */
      registry?: string;
    };
  }
  namespace DeleteCollection {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteCollection.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteContentFindingOverride {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteContentFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteRegistry {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteRegistry.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteRole {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteRole.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteRuleset {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteRuleset.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteSAMLIdentityProvider {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteSAMLIdentityProvider.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteSession {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteSession.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteUser {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteUser.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteVulnerabilityFindingOverride {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteVulnerabilityFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteWebhook {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteWebhook.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DeleteWebhookHeader {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DeleteWebhookHeader.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeCollection {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeCollection.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        rulesets?: {
          /**
           * The unique ID assigned to this content scan ruleset.
           *
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL to the collection resource.
           *
           * example:
           * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
           */
          href: string;
          /**
           * The name of this collection.
           *
           * example:
           * Deep Security Smart Check Collection
           */
          name?: string;
          /**
           * True if this is the default collection used for content scans. There can only be one default collection at all time.
           *
           * example:
           * true
           */
          default: boolean;
          /**
           * The rulesets belonging to this collection.
           *
           */
          rulesets?: {
            /**
             * The unique ID assigned to this content scan ruleset.
             *
             * example:
             * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
             */
            id: string;
            /**
             * The name of this ruleset.
             *
             * example:
             * Scanning ruleset
             */
            name: string;
            /**
             * The URL to the ruleset resource.
             *
             * example:
             * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
             */
            href: string;
            /**
             * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
             *
             * example:
             * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
             */
            ruleset?: string;
            /**
             * If set to true, this ruleset will not be used for scan.
             *
             * example:
             * false
             */
            disabled?: boolean;
          }[];
        }[];
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeContentFindingOverride {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeContentFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The filename for the finding being overridden.
         *
         * example:
         * demo.pem
         */
        filename?: string;
        /**
         * The rule that is being is overridden. Use `*` to override findings for all rules.
         *
         * example:
         * private_keys_pem
         */
        rule?: string;
        /**
         * The image registry where the finding is overridden. Use `*` to override findings in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeDashboard {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeDashboard.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * Metrics capturing information about the content of all registries.
         *
         */
        content?: {
          /**
           * The number of registries.
           *
           */
          registries?: number;
          /**
           * The number of repositories with content in all registries.
           *
           */
          repositories?: number;
          /**
           * The number of images in all registries.
           *
           */
          images?: number;
        };
        /**
         * Metrics capturing information about the scan status of images in all registries.
         *
         */
        scans?: {
          /**
           * The number of images in all registries that have not yet been scanned.
           *
           */
          pending?: number;
          /**
           * The number of images in all registries that are currently being scanned.
           *
           */
          inProgress?: number;
          /**
           * The number of images in all registries that have been scanned and have had no findings.
           *
           */
          ok?: number;
          /**
           * The number of images in all registries that have been scanned and have had findings.
           *
           */
          warnings?: number;
          /**
           * The number of images in all registries that have been scanned and have encountered errors during the scan.
           *
           */
          errors?: number;
        };
        findings?: {
          /**
           * Metadata about the scanners that produced the results.
           *
           */
          scanners?: {
            /**
             * Metadata for the malware scanner.
             *
             */
            malware?: {
              /**
               * Availability of the malware scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the malware pattern database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
              versions?: {
                /**
                 * The ICRC pattern version.
                 *
                 */
                icrc?: string;
                /**
                 * The TrendX pattern version.
                 *
                 */
                trendX?: string;
                /**
                 * The malware blacklist pattern version.
                 *
                 */
                blacklist?: string;
              };
            };
            /**
             * Metadata for the vulnerability scanner.
             *
             */
            vulnerabilities?: {
              /**
               * Availability of the vulnerability scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerabilities database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
            /**
             * Metadata for the vulnerability pattern scanner.
             *
             */
            vulnerabilityPatterns?: {
              /**
               * Availability of the vulnerability pattern scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerability patterns were last published.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              date?: string; // date-time
              /**
               * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
          };
          /**
           * The number of malware items that were found.
           * high:
           *
           */
          malware?: number;
          /**
           * The number of content findings found by severity.
           *
           */
          contents?: {
            /**
             * The total number of content findings categorized by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
          /**
           * The number of vulnerabilities found by severity.
           *
           */
          vulnerabilities?: {
            /**
             * The total number of vulnerabilities that were found by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
        };
        /**
         * Aggregate metrics over a period of time.
         *
         */
        history?: {
          /**
           * Metrics over the past 24 hours.
           *
           */
          "1d"?: {
            /**
             * The number of scans performed on images in all registries in the time period. Will be `-1` if there was an error calculating the value.
             *
             */
            scans?: number;
          };
          /**
           * Metrics over the past 7 days.
           *
           */
          "1w"?: {
            /**
             * The number of scans performed on images in all registries in the time period. Will be `-1` if there was an error calculating the value.
             *
             */
            scans?: number;
          };
        };
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeLicense {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeLicense.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The license type.
         *
         */
        type: "full" | "trial" | "none";
        /**
         * Timestamp when the license will expire.
         *
         * example:
         * 2019-05-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * Grace period after expiry (in days) when the product will still update.
         *
         * example:
         * 0
         */
        gracePeriod?: number;
        /**
         * The entitlements granted by the license (if any).
         *
         */
        entitlements?: {
          /**
           * The number of registries that are currently permitted by the license. A value of `-1` indicates that unlimited licenses can be created.
           *
           * example:
           * 1
           */
          registries?: number;
          /**
           * If the system is unlicensed, it will not receive malware pattern updates and the value for `updates` will be `false`.
           *
           * example:
           * true
           */
          updates?: boolean;
        };
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $402 {
        /**
         * The license type.
         *
         */
        type: "full" | "trial" | "none";
        /**
         * Timestamp when the license will expire.
         *
         * example:
         * 2019-05-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * Grace period after expiry (in days) when the product will still update.
         *
         * example:
         * 0
         */
        gracePeriod?: number;
        /**
         * The entitlements granted by the license (if any).
         *
         */
        entitlements?: {
          /**
           * The number of registries that are currently permitted by the license. A value of `-1` indicates that unlimited licenses can be created.
           *
           * example:
           * 1
           */
          registries?: number;
          /**
           * If the system is unlicensed, it will not receive malware pattern updates and the value for `updates` will be `false`.
           *
           * example:
           * true
           */
          updates?: boolean;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeRegistry {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeRegistry.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      /**
       * The registry object. Credentials will not be included in this object.
       *
       */
      export interface $200 {
        /**
         * The registry ID.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the registry can be found.
         *
         * example:
         * /api/registries/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * The name to display for the registry.
         *
         * example:
         * My Registry
         */
        name: string;
        /**
         * A longer-form note to attach to the registry.
         *
         * example:
         * This registry is an example, and this description is similarly exemplary.
         *
         */
        description?: string;
        /**
         * The host where the registry can be found.
         *
         * example:
         * registry.example.com
         */
        host?: string;
        /**
         * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
         *
         * example:
         * [object Object]
         */
        filter?: {
          /**
           * A pattern to use when determining which images to synchronize (include) from the registry.
           *
           */
          include: string[];
          /**
           * A pattern to use when determining which images to synchronize (exclude) from the registry.
           *
           */
          exclude: string[];
        };
        /**
         * Registry metrics.
         *
         */
        metrics?: {
          /**
           * Metrics capturing information about the content of the registry.
           *
           */
          content?: {
            /**
             * The number of repositories with content in the registry.
             *
             */
            repositories?: number;
            /**
             * The number of images in the registry.
             *
             */
            images?: number;
          };
          /**
           * Metrics capturing information about the scan status of images in the registry.
           *
           */
          scans?: {
            /**
             * The number of images in the registry that have not yet been scanned.
             *
             */
            pending?: number;
            /**
             * The number of images in the registry that are currently being scanned.
             *
             */
            inProgress?: number;
            /**
             * The number of images in the registry that have been scanned and have had no findings.
             *
             */
            ok?: number;
            /**
             * The number of images in the registry that have been scanned and have had findings.
             *
             */
            warnings?: number;
            /**
             * The number of images in the registry that have been scanned and have encountered errors during the scan.
             *
             */
            errors?: number;
          };
          findings?: {
            /**
             * Metadata about the scanners that produced the results.
             *
             */
            scanners?: {
              /**
               * Metadata for the malware scanner.
               *
               */
              malware?: {
                /**
                 * Availability of the malware scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the malware pattern database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
                versions?: {
                  /**
                   * The ICRC pattern version.
                   *
                   */
                  icrc?: string;
                  /**
                   * The TrendX pattern version.
                   *
                   */
                  trendX?: string;
                  /**
                   * The malware blacklist pattern version.
                   *
                   */
                  blacklist?: string;
                };
              };
              /**
               * Metadata for the vulnerability scanner.
               *
               */
              vulnerabilities?: {
                /**
                 * Availability of the vulnerability scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerabilities database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
              /**
               * Metadata for the vulnerability pattern scanner.
               *
               */
              vulnerabilityPatterns?: {
                /**
                 * Availability of the vulnerability pattern scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerability patterns were last published.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                date?: string; // date-time
                /**
                 * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
            };
            /**
             * The number of malware items that were found.
             * high:
             *
             */
            malware?: number;
            /**
             * The number of content findings found by severity.
             *
             */
            contents?: {
              /**
               * The total number of content findings categorized by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
            /**
             * The number of vulnerabilities found by severity.
             *
             */
            vulnerabilities?: {
              /**
               * The total number of vulnerabilities that were found by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
          };
          /**
           * Aggregate metrics over a period of time.
           *
           */
          history?: {
            /**
             * Metrics over the past 24 hours.
             *
             */
            "1d"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
            /**
             * Metrics over the past 7 days.
             *
             */
            "1w"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
          };
        };
        /**
         * If `true`, this registry will be scheduled for daily re-scan.
         *
         */
        schedule?: boolean;
        /**
         * Reports the status of the connection from Deep Security Smart Check to the registry.
         * * `pending`: Deep Security Smart Check has not yet attempted to connect to the registry
         * * `ok`: The last connection attempt to the registry was successful.
         * * `failed`: The last connection attempt to the registry failed.
         *
         * example:
         * pending
         */
        status: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        statusDetail?: string;
        /**
         * The time that the registry connection was created.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the registry connection was last modified.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeRegistryImage {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeRegistryImage.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The registry URL where the image can be found.
         *
         * example:
         * https://registry.example.com
         */
        registry: string;
        /**
         * The repository where the image can be found.
         *
         * example:
         * deepsecurity-smartcheck/example
         */
        repository: string;
        /**
         * The tag assigned to the image.
         *
         * example:
         * latest
         */
        tag: string;
        /**
         * The image's hash digest.
         *
         * example:
         * sha256:8476ee13937bfbf3ea2bce060448002a19c19c063b66583dae31cde64b2f2406
         */
        digest: string;
        /**
         * The image's last known scan status.
         *
         */
        status:
          | ""
          | "pending"
          | "in-progress"
          | "completed-no-findings"
          | "completed-with-findings"
          | "failed";
        findings?: {
          /**
           * Metadata about the scanners that produced the results.
           *
           */
          scanners?: {
            /**
             * Metadata for the malware scanner.
             *
             */
            malware?: {
              /**
               * Availability of the malware scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the malware pattern database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
              versions?: {
                /**
                 * The ICRC pattern version.
                 *
                 */
                icrc?: string;
                /**
                 * The TrendX pattern version.
                 *
                 */
                trendX?: string;
                /**
                 * The malware blacklist pattern version.
                 *
                 */
                blacklist?: string;
              };
            };
            /**
             * Metadata for the vulnerability scanner.
             *
             */
            vulnerabilities?: {
              /**
               * Availability of the vulnerability scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerabilities database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
            /**
             * Metadata for the vulnerability pattern scanner.
             *
             */
            vulnerabilityPatterns?: {
              /**
               * Availability of the vulnerability pattern scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerability patterns were last published.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              date?: string; // date-time
              /**
               * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
          };
          /**
           * The number of malware items that were found.
           * high:
           *
           */
          malware?: number;
          /**
           * The number of content findings found by severity.
           *
           */
          contents?: {
            /**
             * The total number of content findings categorized by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
          /**
           * The number of vulnerabilities found by severity.
           *
           */
          vulnerabilities?: {
            /**
             * The total number of vulnerabilities that were found by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
        };
        /**
         * The time that the image status was last modified.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeRole {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeRole.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The role's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the role can be found.
         *
         * example:
         * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
        /**
         * The time that the role was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the role was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeRuleset {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeRuleset.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this content scan ruleset.
         *
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The name of this ruleset.
         *
         * example:
         * Scanning ruleset
         */
        name: string;
        /**
         * The URL to the ruleset resource.
         *
         * example:
         * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        href: string;
        /**
         * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
         *
         * example:
         * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
         */
        ruleset?: string;
        /**
         * If set to true, this ruleset will not be used for scan.
         *
         * example:
         * false
         */
        disabled?: boolean;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeSAMLIdentityProvider {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeSAMLIdentityProvider.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The SAML identity provider's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the SAML identity provider can be found.
         *
         * example:
         * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * A name for the SAML identity provider.
         *
         * example:
         * MyIdentityProvider
         */
        name?: string;
        /**
         * (optional, default: `null`) A description for the SAML identity provider.
         *
         * example:
         * My identity provider. Contact me@example.com for support.
         */
        description?: string;
        /**
         * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.  If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
         *
         * example:
         * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
         */
        metadataURL?: string;
        /**
         * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The time that the identity provider's certificate will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        validUntil?: string; // datetime
        /**
         * Overall status of the identity provider. If the status is `failed`, the `detail` attribute will have more information.
         *
         * example:
         * ok
         */
        status?: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        detail?: "connection-failed" | "invalid-metadata";
        /**
         * The time that the identity provider was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the identity provider was last modified. If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeScan {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeScan.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this scan.
         *
         */
        id: string;
        /**
         * The URL to the scan resource.
         *
         * example:
         * /api/scans/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
         */
        href: string;
        /**
         * If you provided a name for the scan, it will be returned here.
         *
         */
        name: string;
        source?: {
          type: "docker";
          /**
           * (for scan type `docker` only) The registry hostname or IP address.
           *
           * example:
           * registry.example.com
           */
          registry?: string;
          /**
           * (for scan type `docker` only) The repository name.
           *
           * example:
           * organization/project
           */
          repository?: string;
          /**
           * (for scan type `docker` only) The tag of the image to scan.
           *
           * example:
           * latest
           */
          tag?: string;
          /**
           * (for scan type `docker` only) The digest value of the image to scan.
           *
           * example:
           * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
           */
          digest?: string;
          /**
           * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
        };
        status:
          | "pending"
          | "in-progress"
          | "completed-with-findings"
          | "completed-no-findings"
          | "failed";
        details?: {
          /**
           * (optional) More details about the scan status.
           *
           * example:
           * More details about the scan status
           */
          detail?: string;
          /**
           * The time that the scan was requested.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          requested: string; // date-time
          /**
           * The time that the scan started. This value will not be present if the scan has not yet started.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          started?: string; // date-time
          /**
           * The time that the scan was last updated. This value will not be present if the scan has not yet started.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          /**
           * The time that the scan completed. This value will not be present if the scan has not yet completed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          completed?: string; // date-time
          /**
           * The image digest for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * sha256:43ea500473edb96e079fe23aba62d60e09c11d4c4714ca284d50b80e064c05e3
           */
          digest?: string;
          /**
           * The target operating system for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * linux
           */
          os?: string;
          /**
           * The target architecture for the scanned image. This value will only be present for Docker scans.
           *
           * example:
           * amd64
           */
          architecture?: string;
          /**
           * The labels associated with the scanned image. This value will only be present for Docker scans.
           * example:
           * [object Object]
           */
          labels?: {
            [name: string]: string;
          };
          results: {
            /**
             * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
             *
             * example:
             * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
             */
            id?: string;
            /**
             * For scans of Docker images, this attribute will show the time at which the layer was created.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            createdAt?: string; // date-time
            /**
             * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
             *
             * example:
             * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
             */
            createdBy?: string;
            /**
             * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
             *
             */
            malware?: string;
            /**
             * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
             *
             */
            vulnerabilities?: string;
            /**
             * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
             *
             */
            contents?: string;
            findings?: {
              /**
               * Metadata about the scanners that produced the results.
               *
               */
              scanners?: {
                /**
                 * Metadata for the malware scanner.
                 *
                 */
                malware?: {
                  /**
                   * Availability of the malware scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the malware pattern database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                  versions?: {
                    /**
                     * The ICRC pattern version.
                     *
                     */
                    icrc?: string;
                    /**
                     * The TrendX pattern version.
                     *
                     */
                    trendX?: string;
                    /**
                     * The malware blacklist pattern version.
                     *
                     */
                    blacklist?: string;
                  };
                };
                /**
                 * Metadata for the vulnerability scanner.
                 *
                 */
                vulnerabilities?: {
                  /**
                   * Availability of the vulnerability scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerabilities database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
                /**
                 * Metadata for the vulnerability pattern scanner.
                 *
                 */
                vulnerabilityPatterns?: {
                  /**
                   * Availability of the vulnerability pattern scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerability patterns were last published.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  date?: string; // date-time
                  /**
                   * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
              };
              /**
               * The number of malware items that were found.
               * high:
               *
               */
              malware?: number;
              /**
               * The number of content findings found by severity.
               *
               */
              contents?: {
                /**
                 * The total number of content findings categorized by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
              /**
               * The number of vulnerabilities found by severity.
               *
               */
              vulnerabilities?: {
                /**
                 * The total number of vulnerabilities that were found by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
            };
          }[];
        };
        findings?: {
          /**
           * Metadata about the scanners that produced the results.
           *
           */
          scanners?: {
            /**
             * Metadata for the malware scanner.
             *
             */
            malware?: {
              /**
               * Availability of the malware scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the malware pattern database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
              versions?: {
                /**
                 * The ICRC pattern version.
                 *
                 */
                icrc?: string;
                /**
                 * The TrendX pattern version.
                 *
                 */
                trendX?: string;
                /**
                 * The malware blacklist pattern version.
                 *
                 */
                blacklist?: string;
              };
            };
            /**
             * Metadata for the vulnerability scanner.
             *
             */
            vulnerabilities?: {
              /**
               * Availability of the vulnerability scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerabilities database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
            /**
             * Metadata for the vulnerability pattern scanner.
             *
             */
            vulnerabilityPatterns?: {
              /**
               * Availability of the vulnerability pattern scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerability patterns were last published.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              date?: string; // date-time
              /**
               * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
          };
          /**
           * The number of malware items that were found.
           * high:
           *
           */
          malware?: number;
          /**
           * The number of content findings found by severity.
           *
           */
          contents?: {
            /**
             * The total number of content findings categorized by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
          /**
           * The number of vulnerabilities found by severity.
           *
           */
          vulnerabilities?: {
            /**
             * The total number of vulnerabilities that were found by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
        };
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeScanMetrics {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeScanMetrics.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * Metrics over the past 24 hours.
         *
         */
        "1d"?: {
          /**
           * The number of scans performed in the time period.
           *
           */
          scans?: number;
        };
        /**
         * Metrics over the past 7 days.
         *
         */
        "1w"?: {
          /**
           * The number of scans performed in the time period.
           *
           */
          scans?: number;
        };
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeSession {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeSession.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The session's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the session can be found.
         *
         * example:
         * /api/sessions/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        user?: {
          /**
           * The user's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id: string;
          /**
           * The URL at which the user can be found.
           *
           * example:
           * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href: string;
          /**
           * A unique name for the user.
           *
           * example:
           * alice
           */
          userID: string;
          /**
           * A display name for the user.
           *
           * example:
           * Alice Panoptes
           */
          name?: string;
          /**
           * A description for the user.
           *
           * example:
           * Guardian of the heifer Io.
           */
          description?: string;
          /**
           * The user's role identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          role: string;
          /**
           * If `true`, the user will not be able to perform any actions until they change their password.
           *
           * example:
           * false
           */
          passwordChangeRequired?: boolean;
          /**
           * The time that the user was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the user was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated: string; // datetime
        };
        /**
         * The session token. Use the session token the `Authorization` header of subsequent requests: ```Authorization: Bearer SAMPLEeyJhbGciOiJSUz...```
         *
         * example:
         * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.AzuEel-o9NFJyTvfHx49jMZ-iwU-4NqMQduhUFvWKXXL2ZmMD1Id2ePFU-0ut-esku2avobI7uVDtfEbO6C-Zrn2S4cwsRHnUBCqgzcGwAFr4lHSGi8eAkMSn7b_ceNQu4aGAtDAnCNv3An3U9JUeq29Lze5Md5TTMUSZkFUZR15bJmSKgnd3GvAsIFyIbORmhs2Fe5E9q8jnuSFaeTvvRnlW48Po6bKC09MEhelrES5nnA2tLBu_hMB8VVaDjG7veOtLXrgkH7_6SdBDFZ8Yma_rgA0AwrtYtfQyNunVKctjDq0BE1OPNCJ45n1Cyr7i2TosnYwQUm-v1tX2LZn6g
         */
        token?: string;
        /**
         * The time that the session was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the session was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
        /**
         * The time that the session will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        expires?: string; // datetime
        /**
         * The session name provided for this session. SAML identity providers can set this by including a `RoleSessionName` claim in the SAML response.
         *
         * example:
         * alice
         */
        roleSessionName?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeUser {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeUser.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The user's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id: string;
        /**
         * The URL at which the user can be found.
         *
         * example:
         * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID: string;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role: string;
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * The time that the user was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the user was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeVulnerabilityFindingOverride {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeVulnerabilityFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The name of the vulnerability being overridden.
         *
         * example:
         * CVE-2019-00000
         */
        name?: string;
        /**
         * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
         *
         * example:
         * sample-package
         */
        package?: string;
        /**
         * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
         *
         * example:
         * 0.0.1
         */
        version?: string;
        /**
         * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeWebhook {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeWebhook.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The URL at which the web hook can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href: string;
        /**
         * (optional) A descriptive name for the web hook.
         *
         * example:
         * (optional) a descriptive string
         */
        name: string;
        /**
         * example:
         * https://target.example.com/
         */
        hookURL: string;
        headers: {
          /**
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL at which the web hook header can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * example:
           * Authorization
           */
          name: string;
          /**
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * example:
         * true
         */
        active: boolean;
        /**
         * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
         *
         */
        events: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // date-time
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace DescribeWebhookHeader {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.DescribeWebhookHeader.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The URL at which the web hook can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href: string;
        /**
         * (optional) A descriptive name for the web hook.
         *
         * example:
         * (optional) a descriptive string
         */
        name: string;
        /**
         * example:
         * https://target.example.com/
         */
        hookURL: string;
        headers: {
          /**
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL at which the web hook header can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * example:
           * Authorization
           */
          name: string;
          /**
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * example:
         * true
         */
        active: boolean;
        /**
         * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
         *
         */
        events: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // date-time
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  export interface Error {
    /**
     * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
     *
     * example:
     * Something went wrong. To fix it, try ...
     */
    message: string;
    /**
     * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
     *
     */
    fields?: {
      [name: string]: string;
    };
  }
  export interface Image {
    /**
     * The registry URL where the image can be found.
     *
     * example:
     * https://registry.example.com
     */
    registry: string;
    /**
     * The repository where the image can be found.
     *
     * example:
     * deepsecurity-smartcheck/example
     */
    repository: string;
    /**
     * The tag assigned to the image.
     *
     * example:
     * latest
     */
    tag: string;
    /**
     * The image's hash digest.
     *
     * example:
     * sha256:8476ee13937bfbf3ea2bce060448002a19c19c063b66583dae31cde64b2f2406
     */
    digest: string;
    /**
     * The image's last known scan status.
     *
     */
    status:
      | ""
      | "pending"
      | "in-progress"
      | "completed-no-findings"
      | "completed-with-findings"
      | "failed";
    findings?: {
      /**
       * Metadata about the scanners that produced the results.
       *
       */
      scanners?: {
        /**
         * Metadata for the malware scanner.
         *
         */
        malware?: {
          /**
           * Availability of the malware scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the malware pattern database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          versions?: {
            /**
             * The ICRC pattern version.
             *
             */
            icrc?: string;
            /**
             * The TrendX pattern version.
             *
             */
            trendX?: string;
            /**
             * The malware blacklist pattern version.
             *
             */
            blacklist?: string;
          };
        };
        /**
         * Metadata for the vulnerability scanner.
         *
         */
        vulnerabilities?: {
          /**
           * Availability of the vulnerability scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerabilities database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
        /**
         * Metadata for the vulnerability pattern scanner.
         *
         */
        vulnerabilityPatterns?: {
          /**
           * Availability of the vulnerability pattern scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerability patterns were last published.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          date?: string; // date-time
          /**
           * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
      };
      /**
       * The number of malware items that were found.
       * high:
       *
       */
      malware?: number;
      /**
       * The number of content findings found by severity.
       *
       */
      contents?: {
        /**
         * The total number of content findings categorized by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
      /**
       * The number of vulnerabilities found by severity.
       *
       */
      vulnerabilities?: {
        /**
         * The total number of vulnerabilities that were found by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
    };
    /**
     * The time that the image status was last modified.
     *
     * example:
     * 2017-04-01T00:00:00Z
     */
    updated: string; // datetime
  }
  export interface LayerResults {
    /**
     * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
     *
     * example:
     * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
     */
    id?: string;
    /**
     * For scans of Docker images, this attribute will show the time at which the layer was created.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    createdAt?: string; // date-time
    /**
     * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
     *
     * example:
     * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
     */
    createdBy?: string;
    /**
     * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
     *
     */
    malware?: string;
    /**
     * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
     *
     */
    vulnerabilities?: string;
    /**
     * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
     *
     */
    contents?: string;
    findings?: {
      /**
       * Metadata about the scanners that produced the results.
       *
       */
      scanners?: {
        /**
         * Metadata for the malware scanner.
         *
         */
        malware?: {
          /**
           * Availability of the malware scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the malware pattern database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          versions?: {
            /**
             * The ICRC pattern version.
             *
             */
            icrc?: string;
            /**
             * The TrendX pattern version.
             *
             */
            trendX?: string;
            /**
             * The malware blacklist pattern version.
             *
             */
            blacklist?: string;
          };
        };
        /**
         * Metadata for the vulnerability scanner.
         *
         */
        vulnerabilities?: {
          /**
           * Availability of the vulnerability scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerabilities database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
        /**
         * Metadata for the vulnerability pattern scanner.
         *
         */
        vulnerabilityPatterns?: {
          /**
           * Availability of the vulnerability pattern scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerability patterns were last published.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          date?: string; // date-time
          /**
           * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
      };
      /**
       * The number of malware items that were found.
       * high:
       *
       */
      malware?: number;
      /**
       * The number of content findings found by severity.
       *
       */
      contents?: {
        /**
         * The total number of content findings categorized by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
      /**
       * The number of vulnerabilities found by severity.
       *
       */
      vulnerabilities?: {
        /**
         * The total number of vulnerabilities that were found by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
    };
  }
  export interface License {
    /**
     * The license type.
     *
     */
    type: "full" | "trial" | "none";
    /**
     * Timestamp when the license will expire.
     *
     * example:
     * 2019-05-01T00:00:00Z
     */
    expires?: string; // date-time
    /**
     * Grace period after expiry (in days) when the product will still update.
     *
     * example:
     * 0
     */
    gracePeriod?: number;
    /**
     * The entitlements granted by the license (if any).
     *
     */
    entitlements?: {
      /**
       * The number of registries that are currently permitted by the license. A value of `-1` indicates that unlimited licenses can be created.
       *
       * example:
       * 1
       */
      registries?: number;
      /**
       * If the system is unlicensed, it will not receive malware pattern updates and the value for `updates` will be `false`.
       *
       * example:
       * true
       */
      updates?: boolean;
    };
  }
  namespace ListCollections {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListCollections.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        collections?: {
          /**
           * The unique ID assigned to this content scan ruleset.
           *
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL to the collection resource.
           *
           * example:
           * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
           */
          href: string;
          /**
           * The name of this collection.
           *
           * example:
           * Deep Security Smart Check Collection
           */
          name?: string;
          /**
           * True if this is the default collection used for content scans. There can only be one default collection at all time.
           *
           * example:
           * true
           */
          default: boolean;
          /**
           * The rulesets belonging to this collection.
           *
           */
          rulesets?: {
            /**
             * The unique ID assigned to this content scan ruleset.
             *
             * example:
             * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
             */
            id: string;
            /**
             * The name of this ruleset.
             *
             * example:
             * Scanning ruleset
             */
            name: string;
            /**
             * The URL to the ruleset resource.
             *
             * example:
             * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
             */
            href: string;
            /**
             * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
             *
             * example:
             * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
             */
            ruleset?: string;
            /**
             * If set to true, this ruleset will not be used for scan.
             *
             * example:
             * false
             */
            disabled?: boolean;
          }[];
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListContentFindingOverrides {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListContentFindingOverrides.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        contents?: {
          /**
           * The unique ID assigned to this override.
           *
           * example:
           * 7a2f1d8c-7780-41d2-821b-7230005d4be8
           */
          id?: string;
          /**
           * The URL to the override.
           *
           * example:
           * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
           */
          href?: string;
          /**
           * The filename for the finding being overridden.
           *
           * example:
           * demo.pem
           */
          filename?: string;
          /**
           * The rule that is being is overridden. Use `*` to override findings for all rules.
           *
           * example:
           * private_keys_pem
           */
          rule?: string;
          /**
           * The image registry where the finding is overridden. Use `*` to override findings in all registries.
           *
           * example:
           * registry.example.com
           */
          registry?: string;
          /**
           * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
           *
           * example:
           * organization/project
           */
          repository?: string;
          /**
           * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
           *
           * example:
           * latest
           */
          tag?: string;
          /**
           * The time that the override was created.
           *
           * example:
           * 2019-03-01T00:00:00Z
           */
          created?: string; // date-time
          /**
           * The time that the override was last updated.
           *
           * example:
           * 2019-03-01T00:00:00Z
           */
          updated?: string; // date-time
          /**
           * The time that the override expires. If not present, the override will not expire.
           *
           * example:
           * 2019-04-01T00:00:00Z
           */
          expires?: string; // date-time
          /**
           * A free-form comment field for your notes.
           *
           * example:
           * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
           */
          comment?: string;
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListLayerContentFindings {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListLayerContentFindings.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        contents?: {
          /**
           * The file where the issue was detected by content scanner.
           *
           * example:
           * path/to/file
           */
          filename: string;
          /**
           * The content scan name that matches the file content.
           *
           * example:
           * ssh_key_search_rsa
           */
          rule: string;
          /**
           * The URL to the ruleset resource.
           *
           * example:
           * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          ruleset: string;
          /**
           * The description of the content scan rule.
           *
           * example:
           * This is a rule.
           */
          description?: string;
          /**
           * example:
           * critical
           */
          severity?:
            | "defcon1"
            | "critical"
            | "high"
            | "medium"
            | "low"
            | "negligible"
            | "unknown";
          /**
           * The metadata of the content scan rule.
           *
           * example:
           * [object Object]
           */
          metadata?: {};
          /**
           * The tags of the content scan rule.
           *
           */
          tags?: string[];
          override?: {
            /**
             * The unique ID assigned to this override.
             *
             * example:
             * 7a2f1d8c-7780-41d2-821b-7230005d4be8
             */
            id?: string;
            /**
             * The URL to the override.
             *
             * example:
             * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
             */
            href?: string;
            /**
             * The filename for the finding being overridden.
             *
             * example:
             * demo.pem
             */
            filename?: string;
            /**
             * The rule that is being is overridden. Use `*` to override findings for all rules.
             *
             * example:
             * private_keys_pem
             */
            rule?: string;
            /**
             * The image registry where the finding is overridden. Use `*` to override findings in all registries.
             *
             * example:
             * registry.example.com
             */
            registry?: string;
            /**
             * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
             *
             * example:
             * organization/project
             */
            repository?: string;
            /**
             * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
             *
             * example:
             * latest
             */
            tag?: string;
            /**
             * The time that the override was created.
             *
             * example:
             * 2019-03-01T00:00:00Z
             */
            created?: string; // date-time
            /**
             * The time that the override was last updated.
             *
             * example:
             * 2019-03-01T00:00:00Z
             */
            updated?: string; // date-time
            /**
             * The time that the override expires. If not present, the override will not expire.
             *
             * example:
             * 2019-04-01T00:00:00Z
             */
            expires?: string; // date-time
            /**
             * A free-form comment field for your notes.
             *
             * example:
             * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
             */
            comment?: string;
          };
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListLayerMalwareFindings {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListLayerMalwareFindings.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        malware?: {
          /**
           * The file where the malware was detected.
           *
           * example:
           * path/to/file
           */
          filename?: string;
          icrc?: {
            /**
             * The name of the malware that was detected.
             *
             * example:
             * Eicar_test_file
             */
            name: string;
            /**
             * A link to more information about the detected malware.
             *
             * example:
             * https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/eicar_test_file
             */
            url: string;
          };
          trendx?: {
            found?: {
              /**
               * The name of the malware that was detected.
               *
               * example:
               * Eicar_test_file
               */
              name: string;
              /**
               * A link to more information about the detected malware.
               *
               * example:
               * https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/eicar_test_file
               */
              url: string;
            };
            /**
             * example:
             * 100
             */
            confidence?: number;
            related?: {
              /**
               * The name of related malware that was detected.
               *
               * example:
               * Eicar_test_file
               */
              name: string;
              /**
               * A link to more information about the detected malware.
               *
               * example:
               * https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/eicar_test_file
               */
              url: string;
            }[];
          };
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListLayerVulnerabilityFindings {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListLayerVulnerabilityFindings.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        vulnerabilities?: {
          /**
           * The name of an installed package with known vulnerabilities.
           *
           */
          name: string;
          /**
           * The namespace that the package `name` is unique within.
           *
           */
          namespaceName?: string;
          /**
           * The package version that was detected.
           *
           */
          version?: string;
          /**
           * The version format.
           *
           */
          versionFormat?: string;
          /**
           * A list of the known vulnerabilities in this package.
           *
           */
          vulnerabilities: {
            /**
             * A description of the known vulnerability in this package.
             *
             */
            description: string;
            /**
             * The version of the package where the vulnerability has been resolved.
             *
             */
            fixedBy?: string;
            /**
             * If present, this object will describe the fix and what layer the fix is present in.
             *
             */
            fixed?: {
              /**
               * The name of the package.
               *
               */
              name?: string;
              /**
               * The namespace that the package `name` is unique within.
               *
               */
              namespaceName?: string;
              /**
               * The package version that was detected.
               *
               */
              version?: string;
              /**
               * The version format.
               *
               */
              versionFormat?: string;
              /**
               * The layer identifier where the fixed package version was detected.
               *
               */
              layer?: string;
            };
            override?: {
              /**
               * The unique ID assigned to this override.
               *
               * example:
               * 7a2f1d8c-7780-41d2-821b-7230005d4be8
               */
              id?: string;
              /**
               * The URL to the override.
               *
               * example:
               * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
               */
              href?: string;
              /**
               * The name of the vulnerability being overridden.
               *
               * example:
               * CVE-2019-00000
               */
              name?: string;
              /**
               * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
               *
               * example:
               * sample-package
               */
              package?: string;
              /**
               * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
               *
               * example:
               * 0.0.1
               */
              version?: string;
              /**
               * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
               *
               * example:
               * registry.example.com
               */
              registry?: string;
              /**
               * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
               *
               * example:
               * organization/project
               */
              repository?: string;
              /**
               * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
               *
               * example:
               * latest
               */
              tag?: string;
              /**
               * The time that the override was created.
               *
               * example:
               * 2019-03-01T00:00:00Z
               */
              created?: string; // date-time
              /**
               * The time that the override was last updated.
               *
               * example:
               * 2019-03-01T00:00:00Z
               */
              updated?: string; // date-time
              /**
               * The time that the override expires. If not present, the override will not expire.
               *
               * example:
               * 2019-04-01T00:00:00Z
               */
              expires?: string; // date-time
              /**
               * A free-form comment field for your notes.
               *
               * example:
               * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
               */
              comment?: string;
            };
            /**
             * A link to more information about the vulnerability.
             *
             */
            link?: string;
            /**
             * The name of the vulnerability.
             *
             */
            name: string;
            /**
             * The namespace that the package `name` is unique within.
             *
             */
            namespaceName?: string;
            /**
             * The severity assigned to the vulnerability:
             * * `defcon1`: is a `critical` problem which has been manually highlighted by the team. It requires immediate attention.
             * * `critical`: a world-burning problem, exploitable for nearly all people in a default installation of Linux. Includes remote root privilege escalations, or massive data loss.
             * * `high`: a real problem, exploitable for many people in a default installation. Includes serious remote denial of services, local root privilege escalations, or data loss.
             * * `medium`: a real security problem, and is exploitable for many people. Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges. Updates should be made soon for this priority of issue.
             * * `low`: a security problem, but is hard to exploit due to environment, requires a user-assisted attack, a small install base, or does very little damage. These tend to be included in security updates only when higher-priority issues require an upgrade, or if many low-priority issues have built up.
             * * `negligible`: is technically a security problem, but is only theoretical in nature, requires a very special situation, has almost no install base, or does no real damage. These tend not to get backported from upstreams, and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
             *
             * example:
             * high
             */
            severity:
              | "defcon1"
              | "critical"
              | "high"
              | "medium"
              | "low"
              | "negligible"
              | "unknown";
          }[];
          findings?: {
            /**
             * The number of "Defcon1" vulnerabilities that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical vulnerabilities that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity vulnerabilities that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity vulnerabilities that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity vulnerabilities that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible vulnerabilities that were found.
             *
             */
            negligible?: number;
            /**
             * The number of vulnerabilities with unknown severity that were found.
             *
             */
            unknown?: number;
          };
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListRegistries {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListRegistries.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The list of registries.
         *
         */
        registries?: {
          /**
           * The registry ID.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id?: string;
          /**
           * The URL at which the registry can be found.
           *
           * example:
           * /api/registries/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href?: string;
          /**
           * The name to display for the registry.
           *
           * example:
           * My Registry
           */
          name: string;
          /**
           * A longer-form note to attach to the registry.
           *
           * example:
           * This registry is an example, and this description is similarly exemplary.
           *
           */
          description?: string;
          /**
           * The host where the registry can be found.
           *
           * example:
           * registry.example.com
           */
          host?: string;
          /**
           * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
          /**
           * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
           *
           * example:
           * [object Object]
           */
          filter?: {
            /**
             * A pattern to use when determining which images to synchronize (include) from the registry.
             *
             */
            include: string[];
            /**
             * A pattern to use when determining which images to synchronize (exclude) from the registry.
             *
             */
            exclude: string[];
          };
          /**
           * Registry metrics.
           *
           */
          metrics?: {
            /**
             * Metrics capturing information about the content of the registry.
             *
             */
            content?: {
              /**
               * The number of repositories with content in the registry.
               *
               */
              repositories?: number;
              /**
               * The number of images in the registry.
               *
               */
              images?: number;
            };
            /**
             * Metrics capturing information about the scan status of images in the registry.
             *
             */
            scans?: {
              /**
               * The number of images in the registry that have not yet been scanned.
               *
               */
              pending?: number;
              /**
               * The number of images in the registry that are currently being scanned.
               *
               */
              inProgress?: number;
              /**
               * The number of images in the registry that have been scanned and have had no findings.
               *
               */
              ok?: number;
              /**
               * The number of images in the registry that have been scanned and have had findings.
               *
               */
              warnings?: number;
              /**
               * The number of images in the registry that have been scanned and have encountered errors during the scan.
               *
               */
              errors?: number;
            };
            findings?: {
              /**
               * Metadata about the scanners that produced the results.
               *
               */
              scanners?: {
                /**
                 * Metadata for the malware scanner.
                 *
                 */
                malware?: {
                  /**
                   * Availability of the malware scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the malware pattern database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                  versions?: {
                    /**
                     * The ICRC pattern version.
                     *
                     */
                    icrc?: string;
                    /**
                     * The TrendX pattern version.
                     *
                     */
                    trendX?: string;
                    /**
                     * The malware blacklist pattern version.
                     *
                     */
                    blacklist?: string;
                  };
                };
                /**
                 * Metadata for the vulnerability scanner.
                 *
                 */
                vulnerabilities?: {
                  /**
                   * Availability of the vulnerability scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerabilities database was last updated.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
                /**
                 * Metadata for the vulnerability pattern scanner.
                 *
                 */
                vulnerabilityPatterns?: {
                  /**
                   * Availability of the vulnerability pattern scanner.
                   *
                   */
                  status?: "ok" | "unavailable";
                  /**
                   * The time that the vulnerability patterns were last published.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  date?: string; // date-time
                  /**
                   * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                   *
                   * example:
                   * 2018-05-01T00:00:00Z
                   */
                  updated?: string; // date-time
                };
              };
              /**
               * The number of malware items that were found.
               * high:
               *
               */
              malware?: number;
              /**
               * The number of content findings found by severity.
               *
               */
              contents?: {
                /**
                 * The total number of content findings categorized by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" content findings that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical content findings that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity content findings that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity content findings that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity content findings that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible content findings that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of content findings with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
              /**
               * The number of vulnerabilities found by severity.
               *
               */
              vulnerabilities?: {
                /**
                 * The total number of vulnerabilities that were found by severity.
                 *
                 */
                total?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
                /**
                 * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
                 *
                 */
                unresolved?: {
                  /**
                   * The number of "Defcon1" vulnerabilities that were found.
                   *
                   */
                  defcon1?: number;
                  /**
                   * The number of critical vulnerabilities that were found.
                   *
                   */
                  critical?: number;
                  /**
                   * The number of high-severity vulnerabilities that were found.
                   *
                   */
                  high?: number;
                  /**
                   * The number of medium-severity vulnerabilities that were found.
                   *
                   */
                  medium?: number;
                  /**
                   * The number of low-severity vulnerabilities that were found.
                   *
                   */
                  low?: number;
                  /**
                   * The number of negligible vulnerabilities that were found.
                   *
                   */
                  negligible?: number;
                  /**
                   * The number of vulnerabilities with unknown severity that were found.
                   *
                   */
                  unknown?: number;
                };
              };
            };
            /**
             * Aggregate metrics over a period of time.
             *
             */
            history?: {
              /**
               * Metrics over the past 24 hours.
               *
               */
              "1d"?: {
                /**
                 * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
                 *
                 */
                scans?: number;
              };
              /**
               * Metrics over the past 7 days.
               *
               */
              "1w"?: {
                /**
                 * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
                 *
                 */
                scans?: number;
              };
            };
          };
          /**
           * If `true`, this registry will be scheduled for daily re-scan.
           *
           */
          schedule?: boolean;
          /**
           * Reports the status of the connection from Deep Security Smart Check to the registry.
           * * `pending`: Deep Security Smart Check has not yet attempted to connect to the registry
           * * `ok`: The last connection attempt to the registry was successful.
           * * `failed`: The last connection attempt to the registry failed.
           *
           * example:
           * pending
           */
          status: "pending" | "ok" | "failed";
          /**
           * Reports additional detail when the status is `failed`.
           *
           * example:
           *
           */
          statusDetail?: string;
          /**
           * The time that the registry connection was created.
           *
           * example:
           * 2017-04-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the registry connection was last modified.
           *
           * example:
           * 2017-04-01T00:00:00Z
           */
          updated: string; // datetime
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListRegistryImages {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListRegistryImages.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The list of images.
         *
         */
        images?: {
          /**
           * The registry URL where the image can be found.
           *
           * example:
           * https://registry.example.com
           */
          registry: string;
          /**
           * The repository where the image can be found.
           *
           * example:
           * deepsecurity-smartcheck/example
           */
          repository: string;
          /**
           * The tag assigned to the image.
           *
           * example:
           * latest
           */
          tag: string;
          /**
           * The image's hash digest.
           *
           * example:
           * sha256:8476ee13937bfbf3ea2bce060448002a19c19c063b66583dae31cde64b2f2406
           */
          digest: string;
          /**
           * The image's last known scan status.
           *
           */
          status:
            | ""
            | "pending"
            | "in-progress"
            | "completed-no-findings"
            | "completed-with-findings"
            | "failed";
          findings?: {
            /**
             * Metadata about the scanners that produced the results.
             *
             */
            scanners?: {
              /**
               * Metadata for the malware scanner.
               *
               */
              malware?: {
                /**
                 * Availability of the malware scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the malware pattern database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
                versions?: {
                  /**
                   * The ICRC pattern version.
                   *
                   */
                  icrc?: string;
                  /**
                   * The TrendX pattern version.
                   *
                   */
                  trendX?: string;
                  /**
                   * The malware blacklist pattern version.
                   *
                   */
                  blacklist?: string;
                };
              };
              /**
               * Metadata for the vulnerability scanner.
               *
               */
              vulnerabilities?: {
                /**
                 * Availability of the vulnerability scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerabilities database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
              /**
               * Metadata for the vulnerability pattern scanner.
               *
               */
              vulnerabilityPatterns?: {
                /**
                 * Availability of the vulnerability pattern scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerability patterns were last published.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                date?: string; // date-time
                /**
                 * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
            };
            /**
             * The number of malware items that were found.
             * high:
             *
             */
            malware?: number;
            /**
             * The number of content findings found by severity.
             *
             */
            contents?: {
              /**
               * The total number of content findings categorized by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
            /**
             * The number of vulnerabilities found by severity.
             *
             */
            vulnerabilities?: {
              /**
               * The total number of vulnerabilities that were found by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
          };
          /**
           * The time that the image status was last modified.
           *
           * example:
           * 2017-04-01T00:00:00Z
           */
          updated: string; // datetime
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListRoles {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListRoles.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The list of roles.
         *
         */
        roles?: {
          /**
           * The role's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id?: string;
          /**
           * The URL at which the role can be found.
           *
           * example:
           * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href: string;
          /**
           * A name for the role.
           *
           * example:
           * Administrator
           */
          name: string;
          /**
           * A description for the role.
           *
           * example:
           * An administrator has full access to all operations.
           */
          description?: string;
          /**
           * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
           *
           */
          policies: {
            /**
             * The policy format version.
             *
             * example:
             * 2018-05-01
             */
            version?: "2018-05-01";
            /**
             * The list of statements in the policy.
             *
             */
            statements?: {
              /**
               * The policy effect if the statement matches.
               *
               * example:
               * allow
               */
              effect?: "allow" | "deny";
              /**
               * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
               *
               */
              actions?: string[];
            }[];
          }[];
          /**
           * The time that the role was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the role was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated: string; // datetime
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListRulesets {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListRulesets.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        rulesets?: {
          /**
           * The unique ID assigned to this content scan ruleset.
           *
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The name of this ruleset.
           *
           * example:
           * Scanning ruleset
           */
          name: string;
          /**
           * The URL to the ruleset resource.
           *
           * example:
           * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
           *
           * example:
           * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
           */
          ruleset?: string;
          /**
           * If set to true, this ruleset will not be used for scan.
           *
           * example:
           * false
           */
          disabled?: boolean;
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListSAMLIdentityProviders {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListSAMLIdentityProviders.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The list of SAML identity providers.
         *
         */
        providers?: {
          /**
           * The SAML identity provider's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id?: string;
          /**
           * The URL at which the SAML identity provider can be found.
           *
           * example:
           * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href?: string;
          /**
           * A name for the SAML identity provider.
           *
           * example:
           * MyIdentityProvider
           */
          name?: string;
          /**
           * (optional, default: `null`) A description for the SAML identity provider.
           *
           * example:
           * My identity provider. Contact me@example.com for support.
           */
          description?: string;
          /**
           * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.  If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
           *
           * example:
           * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
           */
          metadataURL?: string;
          /**
           * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
          /**
           * The time that the identity provider's certificate will expire.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          validUntil?: string; // datetime
          /**
           * Overall status of the identity provider. If the status is `failed`, the `detail` attribute will have more information.
           *
           * example:
           * ok
           */
          status?: "pending" | "ok" | "failed";
          /**
           * Reports additional detail when the status is `failed`.
           *
           * example:
           *
           */
          detail?: "connection-failed" | "invalid-metadata";
          /**
           * The time that the identity provider was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created?: string; // datetime
          /**
           * The time that the identity provider was last modified. If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // datetime
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListScans {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListScans.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        scans?: {
          /**
           * The unique ID assigned to this scan.
           *
           */
          id: string;
          /**
           * The URL to the scan resource.
           *
           * example:
           * /api/scans/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
           */
          href: string;
          /**
           * If you provided a name for the scan, it will be returned here.
           *
           */
          name: string;
          source?: {
            type: "docker";
            /**
             * (for scan type `docker` only) The registry hostname or IP address.
             *
             * example:
             * registry.example.com
             */
            registry?: string;
            /**
             * (for scan type `docker` only) The repository name.
             *
             * example:
             * organization/project
             */
            repository?: string;
            /**
             * (for scan type `docker` only) The tag of the image to scan.
             *
             * example:
             * latest
             */
            tag?: string;
            /**
             * (for scan type `docker` only) The digest value of the image to scan.
             *
             * example:
             * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
             */
            digest?: string;
            /**
             * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
             *
             * example:
             * false
             */
            insecureSkipVerify?: boolean;
            /**
             * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
             * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
             *
             * example:
             * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
             */
            rootCAs?: string;
          };
          status:
            | "pending"
            | "in-progress"
            | "completed-with-findings"
            | "completed-no-findings"
            | "failed";
          details?: {
            /**
             * (optional) More details about the scan status.
             *
             * example:
             * More details about the scan status
             */
            detail?: string;
            /**
             * The time that the scan was requested.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            requested: string; // date-time
            /**
             * The time that the scan started. This value will not be present if the scan has not yet started.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            started?: string; // date-time
            /**
             * The time that the scan was last updated. This value will not be present if the scan has not yet started.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
            /**
             * The time that the scan completed. This value will not be present if the scan has not yet completed.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            completed?: string; // date-time
            /**
             * The image digest for the scanned image. This value will only be present for Docker scans.
             *
             * example:
             * sha256:43ea500473edb96e079fe23aba62d60e09c11d4c4714ca284d50b80e064c05e3
             */
            digest?: string;
            /**
             * The target operating system for the scanned image. This value will only be present for Docker scans.
             *
             * example:
             * linux
             */
            os?: string;
            /**
             * The target architecture for the scanned image. This value will only be present for Docker scans.
             *
             * example:
             * amd64
             */
            architecture?: string;
            /**
             * The labels associated with the scanned image. This value will only be present for Docker scans.
             * example:
             * [object Object]
             */
            labels?: {
              [name: string]: string;
            };
            results: {
              /**
               * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
               *
               * example:
               * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
               */
              id?: string;
              /**
               * For scans of Docker images, this attribute will show the time at which the layer was created.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              createdAt?: string; // date-time
              /**
               * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
               *
               * example:
               * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
               */
              createdBy?: string;
              /**
               * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
               *
               */
              malware?: string;
              /**
               * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
               *
               */
              vulnerabilities?: string;
              /**
               * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
               *
               */
              contents?: string;
              findings?: {
                /**
                 * Metadata about the scanners that produced the results.
                 *
                 */
                scanners?: {
                  /**
                   * Metadata for the malware scanner.
                   *
                   */
                  malware?: {
                    /**
                     * Availability of the malware scanner.
                     *
                     */
                    status?: "ok" | "unavailable";
                    /**
                     * The time that the malware pattern database was last updated.
                     *
                     * example:
                     * 2018-05-01T00:00:00Z
                     */
                    updated?: string; // date-time
                    versions?: {
                      /**
                       * The ICRC pattern version.
                       *
                       */
                      icrc?: string;
                      /**
                       * The TrendX pattern version.
                       *
                       */
                      trendX?: string;
                      /**
                       * The malware blacklist pattern version.
                       *
                       */
                      blacklist?: string;
                    };
                  };
                  /**
                   * Metadata for the vulnerability scanner.
                   *
                   */
                  vulnerabilities?: {
                    /**
                     * Availability of the vulnerability scanner.
                     *
                     */
                    status?: "ok" | "unavailable";
                    /**
                     * The time that the vulnerabilities database was last updated.
                     *
                     * example:
                     * 2018-05-01T00:00:00Z
                     */
                    updated?: string; // date-time
                  };
                  /**
                   * Metadata for the vulnerability pattern scanner.
                   *
                   */
                  vulnerabilityPatterns?: {
                    /**
                     * Availability of the vulnerability pattern scanner.
                     *
                     */
                    status?: "ok" | "unavailable";
                    /**
                     * The time that the vulnerability patterns were last published.
                     *
                     * example:
                     * 2018-05-01T00:00:00Z
                     */
                    date?: string; // date-time
                    /**
                     * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                     *
                     * example:
                     * 2018-05-01T00:00:00Z
                     */
                    updated?: string; // date-time
                  };
                };
                /**
                 * The number of malware items that were found.
                 * high:
                 *
                 */
                malware?: number;
                /**
                 * The number of content findings found by severity.
                 *
                 */
                contents?: {
                  /**
                   * The total number of content findings categorized by severity.
                   *
                   */
                  total?: {
                    /**
                     * The number of "Defcon1" content findings that were found.
                     *
                     */
                    defcon1?: number;
                    /**
                     * The number of critical content findings that were found.
                     *
                     */
                    critical?: number;
                    /**
                     * The number of high-severity content findings that were found.
                     *
                     */
                    high?: number;
                    /**
                     * The number of medium-severity content findings that were found.
                     *
                     */
                    medium?: number;
                    /**
                     * The number of low-severity content findings that were found.
                     *
                     */
                    low?: number;
                    /**
                     * The number of negligible content findings that were found.
                     *
                     */
                    negligible?: number;
                    /**
                     * The number of content findings with unknown severity that were found.
                     *
                     */
                    unknown?: number;
                  };
                  /**
                   * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
                   *
                   */
                  unresolved?: {
                    /**
                     * The number of "Defcon1" content findings that were found.
                     *
                     */
                    defcon1?: number;
                    /**
                     * The number of critical content findings that were found.
                     *
                     */
                    critical?: number;
                    /**
                     * The number of high-severity content findings that were found.
                     *
                     */
                    high?: number;
                    /**
                     * The number of medium-severity content findings that were found.
                     *
                     */
                    medium?: number;
                    /**
                     * The number of low-severity content findings that were found.
                     *
                     */
                    low?: number;
                    /**
                     * The number of negligible content findings that were found.
                     *
                     */
                    negligible?: number;
                    /**
                     * The number of content findings with unknown severity that were found.
                     *
                     */
                    unknown?: number;
                  };
                };
                /**
                 * The number of vulnerabilities found by severity.
                 *
                 */
                vulnerabilities?: {
                  /**
                   * The total number of vulnerabilities that were found by severity.
                   *
                   */
                  total?: {
                    /**
                     * The number of "Defcon1" vulnerabilities that were found.
                     *
                     */
                    defcon1?: number;
                    /**
                     * The number of critical vulnerabilities that were found.
                     *
                     */
                    critical?: number;
                    /**
                     * The number of high-severity vulnerabilities that were found.
                     *
                     */
                    high?: number;
                    /**
                     * The number of medium-severity vulnerabilities that were found.
                     *
                     */
                    medium?: number;
                    /**
                     * The number of low-severity vulnerabilities that were found.
                     *
                     */
                    low?: number;
                    /**
                     * The number of negligible vulnerabilities that were found.
                     *
                     */
                    negligible?: number;
                    /**
                     * The number of vulnerabilities with unknown severity that were found.
                     *
                     */
                    unknown?: number;
                  };
                  /**
                   * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
                   *
                   */
                  unresolved?: {
                    /**
                     * The number of "Defcon1" vulnerabilities that were found.
                     *
                     */
                    defcon1?: number;
                    /**
                     * The number of critical vulnerabilities that were found.
                     *
                     */
                    critical?: number;
                    /**
                     * The number of high-severity vulnerabilities that were found.
                     *
                     */
                    high?: number;
                    /**
                     * The number of medium-severity vulnerabilities that were found.
                     *
                     */
                    medium?: number;
                    /**
                     * The number of low-severity vulnerabilities that were found.
                     *
                     */
                    low?: number;
                    /**
                     * The number of negligible vulnerabilities that were found.
                     *
                     */
                    negligible?: number;
                    /**
                     * The number of vulnerabilities with unknown severity that were found.
                     *
                     */
                    unknown?: number;
                  };
                };
              };
            }[];
          };
          findings?: {
            /**
             * Metadata about the scanners that produced the results.
             *
             */
            scanners?: {
              /**
               * Metadata for the malware scanner.
               *
               */
              malware?: {
                /**
                 * Availability of the malware scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the malware pattern database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
                versions?: {
                  /**
                   * The ICRC pattern version.
                   *
                   */
                  icrc?: string;
                  /**
                   * The TrendX pattern version.
                   *
                   */
                  trendX?: string;
                  /**
                   * The malware blacklist pattern version.
                   *
                   */
                  blacklist?: string;
                };
              };
              /**
               * Metadata for the vulnerability scanner.
               *
               */
              vulnerabilities?: {
                /**
                 * Availability of the vulnerability scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerabilities database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
              /**
               * Metadata for the vulnerability pattern scanner.
               *
               */
              vulnerabilityPatterns?: {
                /**
                 * Availability of the vulnerability pattern scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerability patterns were last published.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                date?: string; // date-time
                /**
                 * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
            };
            /**
             * The number of malware items that were found.
             * high:
             *
             */
            malware?: number;
            /**
             * The number of content findings found by severity.
             *
             */
            contents?: {
              /**
               * The total number of content findings categorized by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
            /**
             * The number of vulnerabilities found by severity.
             *
             */
            vulnerabilities?: {
              /**
               * The total number of vulnerabilities that were found by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
          };
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListSessions {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListSessions.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The list of sessions.
         *
         */
        sessions?: {
          /**
           * The session's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id?: string;
          /**
           * The URL at which the session can be found.
           *
           * example:
           * /api/sessions/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href?: string;
          user?: {
            /**
             * The user's unique system identifier.
             *
             * example:
             * 6552eebd-5172-411e-ac71-8c323e6ca0fe
             */
            id: string;
            /**
             * The URL at which the user can be found.
             *
             * example:
             * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
             */
            href: string;
            /**
             * A unique name for the user.
             *
             * example:
             * alice
             */
            userID: string;
            /**
             * A display name for the user.
             *
             * example:
             * Alice Panoptes
             */
            name?: string;
            /**
             * A description for the user.
             *
             * example:
             * Guardian of the heifer Io.
             */
            description?: string;
            /**
             * The user's role identifier.
             *
             * example:
             * 6552eebd-5172-411e-ac71-8c323e6ca0fe
             */
            role: string;
            /**
             * If `true`, the user will not be able to perform any actions until they change their password.
             *
             * example:
             * false
             */
            passwordChangeRequired?: boolean;
            /**
             * The time that the user was created.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            created: string; // datetime
            /**
             * The time that the user was last modified.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated: string; // datetime
          };
          /**
           * The session token. Use the session token the `Authorization` header of subsequent requests: ```Authorization: Bearer SAMPLEeyJhbGciOiJSUz...```
           *
           * example:
           * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.AzuEel-o9NFJyTvfHx49jMZ-iwU-4NqMQduhUFvWKXXL2ZmMD1Id2ePFU-0ut-esku2avobI7uVDtfEbO6C-Zrn2S4cwsRHnUBCqgzcGwAFr4lHSGi8eAkMSn7b_ceNQu4aGAtDAnCNv3An3U9JUeq29Lze5Md5TTMUSZkFUZR15bJmSKgnd3GvAsIFyIbORmhs2Fe5E9q8jnuSFaeTvvRnlW48Po6bKC09MEhelrES5nnA2tLBu_hMB8VVaDjG7veOtLXrgkH7_6SdBDFZ8Yma_rgA0AwrtYtfQyNunVKctjDq0BE1OPNCJ45n1Cyr7i2TosnYwQUm-v1tX2LZn6g
           */
          token?: string;
          /**
           * The time that the session was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created?: string; // datetime
          /**
           * The time that the session was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // datetime
          /**
           * The time that the session will expire.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          expires?: string; // datetime
          /**
           * The session name provided for this session. SAML identity providers can set this by including a `RoleSessionName` claim in the SAML response.
           *
           * example:
           * alice
           */
          roleSessionName?: string;
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListUsers {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListUsers.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The list of users.
         *
         */
        users?: {
          /**
           * The user's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id: string;
          /**
           * The URL at which the user can be found.
           *
           * example:
           * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href: string;
          /**
           * A unique name for the user.
           *
           * example:
           * alice
           */
          userID: string;
          /**
           * A display name for the user.
           *
           * example:
           * Alice Panoptes
           */
          name?: string;
          /**
           * A description for the user.
           *
           * example:
           * Guardian of the heifer Io.
           */
          description?: string;
          /**
           * The user's role identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          role: string;
          /**
           * If `true`, the user will not be able to perform any actions until they change their password.
           *
           * example:
           * false
           */
          passwordChangeRequired?: boolean;
          /**
           * The time that the user was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the user was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated: string; // datetime
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListVulnerabilityFindingOverrides {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListVulnerabilityFindingOverrides.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        vulnerabilities?: {
          /**
           * The unique ID assigned to this override.
           *
           * example:
           * 7a2f1d8c-7780-41d2-821b-7230005d4be8
           */
          id?: string;
          /**
           * The URL to the override.
           *
           * example:
           * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
           */
          href?: string;
          /**
           * The name of the vulnerability being overridden.
           *
           * example:
           * CVE-2019-00000
           */
          name?: string;
          /**
           * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
           *
           * example:
           * sample-package
           */
          package?: string;
          /**
           * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
           *
           * example:
           * 0.0.1
           */
          version?: string;
          /**
           * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
           *
           * example:
           * registry.example.com
           */
          registry?: string;
          /**
           * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
           *
           * example:
           * organization/project
           */
          repository?: string;
          /**
           * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
           *
           * example:
           * latest
           */
          tag?: string;
          /**
           * The time that the override was created.
           *
           * example:
           * 2019-03-01T00:00:00Z
           */
          created?: string; // date-time
          /**
           * The time that the override was last updated.
           *
           * example:
           * 2019-03-01T00:00:00Z
           */
          updated?: string; // date-time
          /**
           * The time that the override expires. If not present, the override will not expire.
           *
           * example:
           * 2019-04-01T00:00:00Z
           */
          expires?: string; // date-time
          /**
           * A free-form comment field for your notes.
           *
           * example:
           * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
           */
          comment?: string;
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListWebhookHeaders {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListWebhookHeaders.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        headers?: {
          /**
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL at which the web hook header can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * example:
           * Authorization
           */
          name: string;
          /**
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ListWebhooks {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ListWebhooks.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        webhooks?: {
          /**
           * The URL at which the web hook can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
           */
          href: string;
          /**
           * (optional) A descriptive name for the web hook.
           *
           * example:
           * (optional) a descriptive string
           */
          name: string;
          /**
           * example:
           * https://target.example.com/
           */
          hookURL: string;
          headers: {
            /**
             * example:
             * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
             */
            id: string;
            /**
             * The URL at which the web hook header can be found.
             *
             * example:
             * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
             */
            href: string;
            /**
             * example:
             * Authorization
             */
            name: string;
            /**
             * example:
             * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
             */
            value: string;
          }[];
          /**
           * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
           *
           * example:
           * false
           */
          insecureSkipVerify?: boolean;
          /**
           * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
           * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
           *
           * example:
           * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
           */
          rootCAs?: string;
          /**
           * example:
           * true
           */
          active: boolean;
          /**
           * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
           *
           */
          events: (
            | "scan-requested"
            | "scan-started"
            | "scan-completed"
            | "*")[];
          /**
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // date-time
          /**
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        }[];
        /**
         * An encoded value that you can use to retrieve the next set of results for a query. If `next` is not present, then there are no more results available.
         *
         * example:
         * dGhpcyB2YWx1ZSBpcyBvcGFxdWUsIGRlY29kaW5nIGl0IHdvbid0IGJlIHVzZWZ1bAo=
         */
        next?: string; // byte
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  export interface MalwareScanResult {
    /**
     * The file where the malware was detected.
     *
     * example:
     * path/to/file
     */
    filename?: string;
    icrc?: {
      /**
       * The name of the malware that was detected.
       *
       * example:
       * Eicar_test_file
       */
      name: string;
      /**
       * A link to more information about the detected malware.
       *
       * example:
       * https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/eicar_test_file
       */
      url: string;
    };
    trendx?: {
      found?: {
        /**
         * The name of the malware that was detected.
         *
         * example:
         * Eicar_test_file
         */
        name: string;
        /**
         * A link to more information about the detected malware.
         *
         * example:
         * https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/eicar_test_file
         */
        url: string;
      };
      /**
       * example:
       * 100
       */
      confidence?: number;
      related?: {
        /**
         * The name of related malware that was detected.
         *
         * example:
         * Eicar_test_file
         */
        name: string;
        /**
         * A link to more information about the detected malware.
         *
         * example:
         * https://www.trendmicro.com/vinfo/us/threat-encyclopedia/malware/eicar_test_file
         */
        url: string;
      }[];
    };
  }
  namespace ModifyCollection {
    export interface BodyParameters {
      request?: SmartCheck.ModifyCollection.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyCollection.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name of this ruleset collection.
         *
         * example:
         * Smart Check collection
         */
        name: string;
        /**
         * The global ruleset collection used for content scan. There can only be one default ruleset collection at all time. If this value is true, the value of other collection will be reset to false.
         *
         * example:
         * true
         */
        default?: boolean;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this content scan ruleset.
         *
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The URL to the collection resource.
         *
         * example:
         * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
         */
        href: string;
        /**
         * The name of this collection.
         *
         * example:
         * Deep Security Smart Check Collection
         */
        name?: string;
        /**
         * True if this is the default collection used for content scans. There can only be one default collection at all time.
         *
         * example:
         * true
         */
        default: boolean;
        /**
         * The rulesets belonging to this collection.
         *
         */
        rulesets?: {
          /**
           * The unique ID assigned to this content scan ruleset.
           *
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The name of this ruleset.
           *
           * example:
           * Scanning ruleset
           */
          name: string;
          /**
           * The URL to the ruleset resource.
           *
           * example:
           * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
           *
           * example:
           * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
           */
          ruleset?: string;
          /**
           * If set to true, this ruleset will not be used for scan.
           *
           * example:
           * false
           */
          disabled?: boolean;
        }[];
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyContentFindingOverride {
    export interface BodyParameters {
      request?: SmartCheck.ModifyContentFindingOverride.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyContentFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The filename for the finding being overridden.
         *
         * example:
         * demo.pem
         */
        filename?: string;
        /**
         * The rule that is being is overridden. Use `*` to override findings for all rules.
         *
         * example:
         * private_keys_pem
         */
        rule?: string;
        /**
         * The image registry where the finding is overridden. Use `*` to override findings in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/contents/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The filename for the finding being overridden.
         *
         * example:
         * demo.pem
         */
        filename?: string;
        /**
         * The rule that is being is overridden. Use `*` to override findings for all rules.
         *
         * example:
         * private_keys_pem
         */
        rule?: string;
        /**
         * The image registry where the finding is overridden. Use `*` to override findings in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the finding is overridden. Use `*` to override findings in all repositories. Use `organization/*` to override findings in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the finding is overridden. Use `*` to override findings in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing demo.pem private key for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyRegistry {
    export interface BodyParameters {
      request?: SmartCheck.ModifyRegistry.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyRegistry.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name to display for the registry. If not specified, the registry `host` value will be used as the initial name.
         *
         * example:
         * My Registry
         */
        name?: string;
        /**
         * A longer-form note to attach to the registry.
         *
         * example:
         * This registry is an example, and this description is similarly exemplary.
         *
         */
        description?: string;
        /**
         * The host where the registry can be found. Required except when using Amazon Elastic Container Registry.
         *
         * example:
         * registry.example.com
         */
        host?: string;
        /**
         * Credentials to use when accessing the registry.
         *
         */
        credentials?: {
          /**
           * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
           *
           * example:
           * username
           */
          username?: string;
          /**
           * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
           *
           * example:
           * ************
           */
          password?: string; // password
          /**
           * The AWS-specific information for authenticating to the registry.
           *
           */
          aws?: {
            /**
             * The AWS region identifier for the region where the registry is located.
             *
             * example:
             * us-east-1
             */
            region: string;
            /**
             * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
             *
             * example:
             * AKIAIOSFODNN7EXAMPLE
             */
            accessKeyID?: string;
            /**
             * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
             *
             * example:
             * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
             */
            secretAccessKey?: string;
            /**
             * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
             *
             * example:
             * arn:aws:iam::account-id:role/role-name
             */
            role?: string;
            /**
             * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
             *
             * example:
             * myExternalID
             */
            externalID?: string;
            /**
             * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
             *
             * example:
             * DeepSecuritySmartCheck
             */
            roleSessionName?: string; // ^[\w+=,.@-]*$
            /**
             * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
             *
             * example:
             * account-id
             */
            registry?: string;
          };
        };
        /**
         * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
         *
         * example:
         * [object Object]
         */
        filter?: {
          /**
           * A pattern to use when determining which images to synchronize (include) from the registry.
           *
           */
          include: string[];
          /**
           * A pattern to use when determining which images to synchronize (exclude) from the registry.
           *
           */
          exclude: string[];
        };
        /**
         * If `true`, this registry will be scheduled for daily re-scan.
         *
         */
        schedule?: boolean;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      /**
       * The registry object. Credentials will not be included in this object.
       *
       */
      export interface $200 {
        /**
         * The registry ID.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the registry can be found.
         *
         * example:
         * /api/registries/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * The name to display for the registry.
         *
         * example:
         * My Registry
         */
        name: string;
        /**
         * A longer-form note to attach to the registry.
         *
         * example:
         * This registry is an example, and this description is similarly exemplary.
         *
         */
        description?: string;
        /**
         * The host where the registry can be found.
         *
         * example:
         * registry.example.com
         */
        host?: string;
        /**
         * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
         *
         * example:
         * [object Object]
         */
        filter?: {
          /**
           * A pattern to use when determining which images to synchronize (include) from the registry.
           *
           */
          include: string[];
          /**
           * A pattern to use when determining which images to synchronize (exclude) from the registry.
           *
           */
          exclude: string[];
        };
        /**
         * Registry metrics.
         *
         */
        metrics?: {
          /**
           * Metrics capturing information about the content of the registry.
           *
           */
          content?: {
            /**
             * The number of repositories with content in the registry.
             *
             */
            repositories?: number;
            /**
             * The number of images in the registry.
             *
             */
            images?: number;
          };
          /**
           * Metrics capturing information about the scan status of images in the registry.
           *
           */
          scans?: {
            /**
             * The number of images in the registry that have not yet been scanned.
             *
             */
            pending?: number;
            /**
             * The number of images in the registry that are currently being scanned.
             *
             */
            inProgress?: number;
            /**
             * The number of images in the registry that have been scanned and have had no findings.
             *
             */
            ok?: number;
            /**
             * The number of images in the registry that have been scanned and have had findings.
             *
             */
            warnings?: number;
            /**
             * The number of images in the registry that have been scanned and have encountered errors during the scan.
             *
             */
            errors?: number;
          };
          findings?: {
            /**
             * Metadata about the scanners that produced the results.
             *
             */
            scanners?: {
              /**
               * Metadata for the malware scanner.
               *
               */
              malware?: {
                /**
                 * Availability of the malware scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the malware pattern database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
                versions?: {
                  /**
                   * The ICRC pattern version.
                   *
                   */
                  icrc?: string;
                  /**
                   * The TrendX pattern version.
                   *
                   */
                  trendX?: string;
                  /**
                   * The malware blacklist pattern version.
                   *
                   */
                  blacklist?: string;
                };
              };
              /**
               * Metadata for the vulnerability scanner.
               *
               */
              vulnerabilities?: {
                /**
                 * Availability of the vulnerability scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerabilities database was last updated.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
              /**
               * Metadata for the vulnerability pattern scanner.
               *
               */
              vulnerabilityPatterns?: {
                /**
                 * Availability of the vulnerability pattern scanner.
                 *
                 */
                status?: "ok" | "unavailable";
                /**
                 * The time that the vulnerability patterns were last published.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                date?: string; // date-time
                /**
                 * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
                 *
                 * example:
                 * 2018-05-01T00:00:00Z
                 */
                updated?: string; // date-time
              };
            };
            /**
             * The number of malware items that were found.
             * high:
             *
             */
            malware?: number;
            /**
             * The number of content findings found by severity.
             *
             */
            contents?: {
              /**
               * The total number of content findings categorized by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" content findings that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical content findings that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity content findings that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity content findings that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity content findings that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible content findings that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of content findings with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
            /**
             * The number of vulnerabilities found by severity.
             *
             */
            vulnerabilities?: {
              /**
               * The total number of vulnerabilities that were found by severity.
               *
               */
              total?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
              /**
               * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
               *
               */
              unresolved?: {
                /**
                 * The number of "Defcon1" vulnerabilities that were found.
                 *
                 */
                defcon1?: number;
                /**
                 * The number of critical vulnerabilities that were found.
                 *
                 */
                critical?: number;
                /**
                 * The number of high-severity vulnerabilities that were found.
                 *
                 */
                high?: number;
                /**
                 * The number of medium-severity vulnerabilities that were found.
                 *
                 */
                medium?: number;
                /**
                 * The number of low-severity vulnerabilities that were found.
                 *
                 */
                low?: number;
                /**
                 * The number of negligible vulnerabilities that were found.
                 *
                 */
                negligible?: number;
                /**
                 * The number of vulnerabilities with unknown severity that were found.
                 *
                 */
                unknown?: number;
              };
            };
          };
          /**
           * Aggregate metrics over a period of time.
           *
           */
          history?: {
            /**
             * Metrics over the past 24 hours.
             *
             */
            "1d"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
            /**
             * Metrics over the past 7 days.
             *
             */
            "1w"?: {
              /**
               * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
               *
               */
              scans?: number;
            };
          };
        };
        /**
         * If `true`, this registry will be scheduled for daily re-scan.
         *
         */
        schedule?: boolean;
        /**
         * Reports the status of the connection from Deep Security Smart Check to the registry.
         * * `pending`: Deep Security Smart Check has not yet attempted to connect to the registry
         * * `ok`: The last connection attempt to the registry was successful.
         * * `failed`: The last connection attempt to the registry failed.
         *
         * example:
         * pending
         */
        status: "pending" | "ok" | "failed";
        /**
         * Reports additional detail when the status is `failed`.
         *
         * example:
         *
         */
        statusDetail?: string;
        /**
         * The time that the registry connection was created.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the registry connection was last modified.
         *
         * example:
         * 2017-04-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyRole {
    export interface BodyParameters {
      request?: SmartCheck.ModifyRole.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyRole.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The role's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the role can be found.
         *
         * example:
         * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
        /**
         * The time that the role was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the role was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyRuleset {
    export interface BodyParameters {
      request?: SmartCheck.ModifyRuleset.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyRuleset.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name of this ruleset.
         *
         * example:
         * Scanning rule
         */
        name: string;
        /**
         * Base64-encoded yara rules.
         *
         * example:
         * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
         */
        ruleset: string;
        /**
         * If set to true, this ruleset will not be used for scan.
         *
         * example:
         * false
         */
        disabled?: boolean;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this content scan ruleset.
         *
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The name of this ruleset.
         *
         * example:
         * Scanning ruleset
         */
        name: string;
        /**
         * The URL to the ruleset resource.
         *
         * example:
         * /api/collections/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff/rulesets/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        href: string;
        /**
         * Base64-encoded yara ruleset. In some special rulesets, it will not be displayed.
         *
         * example:
         * cnVsZSBkZXRlY3RvciB7IAoJY29uZGl0aW9uOgoJCXRydWUKfQo=
         */
        ruleset?: string;
        /**
         * If set to true, this ruleset will not be used for scan.
         *
         * example:
         * false
         */
        disabled?: boolean;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifySAMLIdentityProvider {
    export interface BodyParameters {
      request?: SmartCheck.ModifySAMLIdentityProvider.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifySAMLIdentityProvider.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The SAML identity provider's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the SAML identity provider can be found.
         *
         * example:
         * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        /**
         * A name for the SAML identity provider.
         *
         * example:
         * MyIdentityProvider
         */
        name?: string;
        /**
         * (optional, default: `null`) A description for the SAML identity provider.
         *
         * example:
         * My identity provider. Contact me@example.com for support.
         */
        description?: string;
        /**
         * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.
         *
         * example:
         * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
         */
        metadataURL?: string;
        /**
         * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * (optional, default: `null`) If present, Deep Security Smart Check will use the provided metadata XML for the identity provider. Only one of `metadataURL` and `metadataXML` should be present.
         *
         * example:
         * PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxFbnRpdHlEZXNjcmlwdG9yLi4uCg==
         */
        metadataXML?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The role's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the role can be found.
         *
         * example:
         * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A name for the role.
         *
         * example:
         * Administrator
         */
        name: string;
        /**
         * A description for the role.
         *
         * example:
         * An administrator has full access to all operations.
         */
        description?: string;
        /**
         * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
         *
         */
        policies: {
          /**
           * The policy format version.
           *
           * example:
           * 2018-05-01
           */
          version?: "2018-05-01";
          /**
           * The list of statements in the policy.
           *
           */
          statements?: {
            /**
             * The policy effect if the statement matches.
             *
             * example:
             * allow
             */
            effect?: "allow" | "deny";
            /**
             * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
             *
             */
            actions?: string[];
          }[];
        }[];
        /**
         * The time that the role was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the role was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyUser {
    export interface BodyParameters {
      request?: SmartCheck.ModifyUser.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyUser.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID?: string;
        /**
         * A password for the user.
         *
         * example:
         * ThIsIsNoTaGoOdPaSsWoRd!
         */
        password?: string; // password
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role ID.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The user's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id: string;
        /**
         * The URL at which the user can be found.
         *
         * example:
         * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href: string;
        /**
         * A unique name for the user.
         *
         * example:
         * alice
         */
        userID: string;
        /**
         * A display name for the user.
         *
         * example:
         * Alice Panoptes
         */
        name?: string;
        /**
         * A description for the user.
         *
         * example:
         * Guardian of the heifer Io.
         */
        description?: string;
        /**
         * The user's role identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        role: string;
        /**
         * If `true`, the user will not be able to perform any actions until they change their password.
         *
         * example:
         * false
         */
        passwordChangeRequired?: boolean;
        /**
         * The time that the user was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // datetime
        /**
         * The time that the user was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated: string; // datetime
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyVulnerabilityFindingOverride {
    export interface BodyParameters {
      request?: SmartCheck.ModifyVulnerabilityFindingOverride.Parameters.Request;
    }
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyVulnerabilityFindingOverride.Parameters.XApiVersion;
    }
    namespace Parameters {
      export interface Request {
        /**
         * The name of the vulnerability being overridden.
         *
         * example:
         * CVE-2019-00000
         */
        name?: string;
        /**
         * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
         *
         * example:
         * sample-package
         */
        package?: string;
        /**
         * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
         *
         * example:
         * 0.0.1
         */
        version?: string;
        /**
         * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The name of the vulnerability being overridden.
         *
         * example:
         * CVE-2019-00000
         */
        name?: string;
        /**
         * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
         *
         * example:
         * sample-package
         */
        package?: string;
        /**
         * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
         *
         * example:
         * 0.0.1
         */
        version?: string;
        /**
         * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyWebhook {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyWebhook.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The URL at which the web hook can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href: string;
        /**
         * (optional) A descriptive name for the web hook.
         *
         * example:
         * (optional) a descriptive string
         */
        name: string;
        /**
         * example:
         * https://target.example.com/
         */
        hookURL: string;
        headers: {
          /**
           * example:
           * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          id: string;
          /**
           * The URL at which the web hook header can be found.
           *
           * example:
           * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
           */
          href: string;
          /**
           * example:
           * Authorization
           */
          name: string;
          /**
           * example:
           * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
           */
          value: string;
        }[];
        /**
         * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
         *
         * example:
         * false
         */
        insecureSkipVerify?: boolean;
        /**
         * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
         * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
         *
         * example:
         * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
         */
        rootCAs?: string;
        /**
         * example:
         * true
         */
        active: boolean;
        /**
         * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
         *
         */
        events: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        created: string; // date-time
        /**
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace ModifyWebhookHeader {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.ModifyWebhookHeader.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * example:
         * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        id: string;
        /**
         * The URL at which the web hook header can be found.
         *
         * example:
         * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
         */
        href: string;
        /**
         * example:
         * Authorization
         */
        name: string;
        /**
         * example:
         * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
         */
        value: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  namespace PingWebhook {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.PingWebhook.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  export interface Policy {
    /**
     * The policy format version.
     *
     * example:
     * 2018-05-01
     */
    version?: "2018-05-01";
    /**
     * The list of statements in the policy.
     *
     */
    statements?: {
      /**
       * The policy effect if the statement matches.
       *
       * example:
       * allow
       */
      effect?: "allow" | "deny";
      /**
       * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
       *
       */
      actions?: string[];
    }[];
  }
  namespace RefreshSession {
    export interface HeaderParameters {
      "X-Api-Version"?: SmartCheck.RefreshSession.Parameters.XApiVersion;
    }
    namespace Parameters {
      export type XApiVersion = "2018-05-01";
    }
    namespace Responses {
      export interface $200 {
        /**
         * The session's unique system identifier.
         *
         * example:
         * 6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        id?: string;
        /**
         * The URL at which the session can be found.
         *
         * example:
         * /api/sessions/6552eebd-5172-411e-ac71-8c323e6ca0fe
         */
        href?: string;
        user?: {
          /**
           * The user's unique system identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          id: string;
          /**
           * The URL at which the user can be found.
           *
           * example:
           * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          href: string;
          /**
           * A unique name for the user.
           *
           * example:
           * alice
           */
          userID: string;
          /**
           * A display name for the user.
           *
           * example:
           * Alice Panoptes
           */
          name?: string;
          /**
           * A description for the user.
           *
           * example:
           * Guardian of the heifer Io.
           */
          description?: string;
          /**
           * The user's role identifier.
           *
           * example:
           * 6552eebd-5172-411e-ac71-8c323e6ca0fe
           */
          role: string;
          /**
           * If `true`, the user will not be able to perform any actions until they change their password.
           *
           * example:
           * false
           */
          passwordChangeRequired?: boolean;
          /**
           * The time that the user was created.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          created: string; // datetime
          /**
           * The time that the user was last modified.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated: string; // datetime
        };
        /**
         * The session token. Use the session token the `Authorization` header of subsequent requests: ```Authorization: Bearer SAMPLEeyJhbGciOiJSUz...```
         *
         * example:
         * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.AzuEel-o9NFJyTvfHx49jMZ-iwU-4NqMQduhUFvWKXXL2ZmMD1Id2ePFU-0ut-esku2avobI7uVDtfEbO6C-Zrn2S4cwsRHnUBCqgzcGwAFr4lHSGi8eAkMSn7b_ceNQu4aGAtDAnCNv3An3U9JUeq29Lze5Md5TTMUSZkFUZR15bJmSKgnd3GvAsIFyIbORmhs2Fe5E9q8jnuSFaeTvvRnlW48Po6bKC09MEhelrES5nnA2tLBu_hMB8VVaDjG7veOtLXrgkH7_6SdBDFZ8Yma_rgA0AwrtYtfQyNunVKctjDq0BE1OPNCJ45n1Cyr7i2TosnYwQUm-v1tX2LZn6g
         */
        token?: string;
        /**
         * The time that the session was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        created?: string; // datetime
        /**
         * The time that the session was last modified.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // datetime
        /**
         * The time that the session will expire.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        expires?: string; // datetime
        /**
         * The session name provided for this session. SAML identity providers can set this by including a `RoleSessionName` claim in the SAML response.
         *
         * example:
         * alice
         */
        roleSessionName?: string;
      }
      export interface $400 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $401 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $404 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $500 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
      export interface $503 {
        /**
         * The error message will explain what went wrong and will attempt to give some hints as to how to fix it.
         *
         * example:
         * Something went wrong. To fix it, try ...
         */
        message: string;
        /**
         * If present, the `fields` object will indicate which input fields had errors; the attribute name will be the name of the input field and the value will be an error message.
         *
         */
        fields?: {
          [name: string]: string;
        };
      }
    }
  }
  export interface RegistriesDashboard {
    /**
     * Metrics capturing information about the content of all registries.
     *
     */
    content?: {
      /**
       * The number of registries.
       *
       */
      registries?: number;
      /**
       * The number of repositories with content in all registries.
       *
       */
      repositories?: number;
      /**
       * The number of images in all registries.
       *
       */
      images?: number;
    };
    /**
     * Metrics capturing information about the scan status of images in all registries.
     *
     */
    scans?: {
      /**
       * The number of images in all registries that have not yet been scanned.
       *
       */
      pending?: number;
      /**
       * The number of images in all registries that are currently being scanned.
       *
       */
      inProgress?: number;
      /**
       * The number of images in all registries that have been scanned and have had no findings.
       *
       */
      ok?: number;
      /**
       * The number of images in all registries that have been scanned and have had findings.
       *
       */
      warnings?: number;
      /**
       * The number of images in all registries that have been scanned and have encountered errors during the scan.
       *
       */
      errors?: number;
    };
    findings?: {
      /**
       * Metadata about the scanners that produced the results.
       *
       */
      scanners?: {
        /**
         * Metadata for the malware scanner.
         *
         */
        malware?: {
          /**
           * Availability of the malware scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the malware pattern database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          versions?: {
            /**
             * The ICRC pattern version.
             *
             */
            icrc?: string;
            /**
             * The TrendX pattern version.
             *
             */
            trendX?: string;
            /**
             * The malware blacklist pattern version.
             *
             */
            blacklist?: string;
          };
        };
        /**
         * Metadata for the vulnerability scanner.
         *
         */
        vulnerabilities?: {
          /**
           * Availability of the vulnerability scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerabilities database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
        /**
         * Metadata for the vulnerability pattern scanner.
         *
         */
        vulnerabilityPatterns?: {
          /**
           * Availability of the vulnerability pattern scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerability patterns were last published.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          date?: string; // date-time
          /**
           * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
      };
      /**
       * The number of malware items that were found.
       * high:
       *
       */
      malware?: number;
      /**
       * The number of content findings found by severity.
       *
       */
      contents?: {
        /**
         * The total number of content findings categorized by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
      /**
       * The number of vulnerabilities found by severity.
       *
       */
      vulnerabilities?: {
        /**
         * The total number of vulnerabilities that were found by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
    };
    /**
     * Aggregate metrics over a period of time.
     *
     */
    history?: {
      /**
       * Metrics over the past 24 hours.
       *
       */
      "1d"?: {
        /**
         * The number of scans performed on images in all registries in the time period. Will be `-1` if there was an error calculating the value.
         *
         */
        scans?: number;
      };
      /**
       * Metrics over the past 7 days.
       *
       */
      "1w"?: {
        /**
         * The number of scans performed on images in all registries in the time period. Will be `-1` if there was an error calculating the value.
         *
         */
        scans?: number;
      };
    };
  }
  /**
   * The registry object. Credentials will not be included in this object.
   *
   */
  export interface Registry {
    /**
     * The registry ID.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    id?: string;
    /**
     * The URL at which the registry can be found.
     *
     * example:
     * /api/registries/6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    href?: string;
    /**
     * The name to display for the registry.
     *
     * example:
     * My Registry
     */
    name: string;
    /**
     * A longer-form note to attach to the registry.
     *
     * example:
     * This registry is an example, and this description is similarly exemplary.
     *
     */
    description?: string;
    /**
     * The host where the registry can be found.
     *
     * example:
     * registry.example.com
     */
    host?: string;
    /**
     * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
    /**
     * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
     *
     * example:
     * [object Object]
     */
    filter?: {
      /**
       * A pattern to use when determining which images to synchronize (include) from the registry.
       *
       */
      include: string[];
      /**
       * A pattern to use when determining which images to synchronize (exclude) from the registry.
       *
       */
      exclude: string[];
    };
    /**
     * Registry metrics.
     *
     */
    metrics?: {
      /**
       * Metrics capturing information about the content of the registry.
       *
       */
      content?: {
        /**
         * The number of repositories with content in the registry.
         *
         */
        repositories?: number;
        /**
         * The number of images in the registry.
         *
         */
        images?: number;
      };
      /**
       * Metrics capturing information about the scan status of images in the registry.
       *
       */
      scans?: {
        /**
         * The number of images in the registry that have not yet been scanned.
         *
         */
        pending?: number;
        /**
         * The number of images in the registry that are currently being scanned.
         *
         */
        inProgress?: number;
        /**
         * The number of images in the registry that have been scanned and have had no findings.
         *
         */
        ok?: number;
        /**
         * The number of images in the registry that have been scanned and have had findings.
         *
         */
        warnings?: number;
        /**
         * The number of images in the registry that have been scanned and have encountered errors during the scan.
         *
         */
        errors?: number;
      };
      findings?: {
        /**
         * Metadata about the scanners that produced the results.
         *
         */
        scanners?: {
          /**
           * Metadata for the malware scanner.
           *
           */
          malware?: {
            /**
             * Availability of the malware scanner.
             *
             */
            status?: "ok" | "unavailable";
            /**
             * The time that the malware pattern database was last updated.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
            versions?: {
              /**
               * The ICRC pattern version.
               *
               */
              icrc?: string;
              /**
               * The TrendX pattern version.
               *
               */
              trendX?: string;
              /**
               * The malware blacklist pattern version.
               *
               */
              blacklist?: string;
            };
          };
          /**
           * Metadata for the vulnerability scanner.
           *
           */
          vulnerabilities?: {
            /**
             * Availability of the vulnerability scanner.
             *
             */
            status?: "ok" | "unavailable";
            /**
             * The time that the vulnerabilities database was last updated.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
          };
          /**
           * Metadata for the vulnerability pattern scanner.
           *
           */
          vulnerabilityPatterns?: {
            /**
             * Availability of the vulnerability pattern scanner.
             *
             */
            status?: "ok" | "unavailable";
            /**
             * The time that the vulnerability patterns were last published.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            date?: string; // date-time
            /**
             * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
          };
        };
        /**
         * The number of malware items that were found.
         * high:
         *
         */
        malware?: number;
        /**
         * The number of content findings found by severity.
         *
         */
        contents?: {
          /**
           * The total number of content findings categorized by severity.
           *
           */
          total?: {
            /**
             * The number of "Defcon1" content findings that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical content findings that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity content findings that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity content findings that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity content findings that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible content findings that were found.
             *
             */
            negligible?: number;
            /**
             * The number of content findings with unknown severity that were found.
             *
             */
            unknown?: number;
          };
          /**
           * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
           *
           */
          unresolved?: {
            /**
             * The number of "Defcon1" content findings that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical content findings that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity content findings that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity content findings that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity content findings that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible content findings that were found.
             *
             */
            negligible?: number;
            /**
             * The number of content findings with unknown severity that were found.
             *
             */
            unknown?: number;
          };
        };
        /**
         * The number of vulnerabilities found by severity.
         *
         */
        vulnerabilities?: {
          /**
           * The total number of vulnerabilities that were found by severity.
           *
           */
          total?: {
            /**
             * The number of "Defcon1" vulnerabilities that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical vulnerabilities that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity vulnerabilities that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity vulnerabilities that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity vulnerabilities that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible vulnerabilities that were found.
             *
             */
            negligible?: number;
            /**
             * The number of vulnerabilities with unknown severity that were found.
             *
             */
            unknown?: number;
          };
          /**
           * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
           *
           */
          unresolved?: {
            /**
             * The number of "Defcon1" vulnerabilities that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical vulnerabilities that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity vulnerabilities that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity vulnerabilities that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity vulnerabilities that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible vulnerabilities that were found.
             *
             */
            negligible?: number;
            /**
             * The number of vulnerabilities with unknown severity that were found.
             *
             */
            unknown?: number;
          };
        };
      };
      /**
       * Aggregate metrics over a period of time.
       *
       */
      history?: {
        /**
         * Metrics over the past 24 hours.
         *
         */
        "1d"?: {
          /**
           * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
           *
           */
          scans?: number;
        };
        /**
         * Metrics over the past 7 days.
         *
         */
        "1w"?: {
          /**
           * The number of scans performed on images in the registry in the time period. Will be `-1` if there was an error calculating the value.
           *
           */
          scans?: number;
        };
      };
    };
    /**
     * If `true`, this registry will be scheduled for daily re-scan.
     *
     */
    schedule?: boolean;
    /**
     * Reports the status of the connection from Deep Security Smart Check to the registry.
     * * `pending`: Deep Security Smart Check has not yet attempted to connect to the registry
     * * `ok`: The last connection attempt to the registry was successful.
     * * `failed`: The last connection attempt to the registry failed.
     *
     * example:
     * pending
     */
    status: "pending" | "ok" | "failed";
    /**
     * Reports additional detail when the status is `failed`.
     *
     * example:
     *
     */
    statusDetail?: string;
    /**
     * The time that the registry connection was created.
     *
     * example:
     * 2017-04-01T00:00:00Z
     */
    created: string; // datetime
    /**
     * The time that the registry connection was last modified.
     *
     * example:
     * 2017-04-01T00:00:00Z
     */
    updated: string; // datetime
  }
  export interface RegistryRequest {
    /**
     * The name to display for the registry. If not specified, the registry `host` value will be used as the initial name.
     *
     * example:
     * My Registry
     */
    name?: string;
    /**
     * A longer-form note to attach to the registry.
     *
     * example:
     * This registry is an example, and this description is similarly exemplary.
     *
     */
    description?: string;
    /**
     * The host where the registry can be found. Required except when using Amazon Elastic Container Registry.
     *
     * example:
     * registry.example.com
     */
    host?: string;
    /**
     * Credentials to use when accessing the registry.
     *
     */
    credentials?: {
      /**
       * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
       *
       * example:
       * username
       */
      username?: string;
      /**
       * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
       *
       * example:
       * ************
       */
      password?: string; // password
      /**
       * The AWS-specific information for authenticating to the registry.
       *
       */
      aws?: {
        /**
         * The AWS region identifier for the region where the registry is located.
         *
         * example:
         * us-east-1
         */
        region: string;
        /**
         * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
         *
         * example:
         * AKIAIOSFODNN7EXAMPLE
         */
        accessKeyID?: string;
        /**
         * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
         *
         * example:
         * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
         */
        secretAccessKey?: string;
        /**
         * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
         *
         * example:
         * arn:aws:iam::account-id:role/role-name
         */
        role?: string;
        /**
         * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
         *
         * example:
         * myExternalID
         */
        externalID?: string;
        /**
         * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
         *
         * example:
         * DeepSecuritySmartCheck
         */
        roleSessionName?: string; // ^[\w+=,.@-]*$
        /**
         * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
         *
         * example:
         * account-id
         */
        registry?: string;
      };
    };
    /**
     * If `true`, Deep Security Smart Check will not verify TLS connections to the registry. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the registry are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, the service will use the provided root CAs as the trusted root CAs for registry requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the service will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
    /**
     * The filters that define the repositories and tags that will be synchronized from the registry. The maximum size of the filters for a registry is 32768 bytes.
     *
     * example:
     * [object Object]
     */
    filter?: {
      /**
       * A pattern to use when determining which images to synchronize (include) from the registry.
       *
       */
      include: string[];
      /**
       * A pattern to use when determining which images to synchronize (exclude) from the registry.
       *
       */
      exclude: string[];
    };
    /**
     * If `true`, this registry will be scheduled for daily re-scan.
     *
     */
    schedule?: boolean;
  }
  export interface RegistryScanRequest {
    /**
     * (optional) A descriptive name for the scan.
     *
     * example:
     * (optional) a descriptive string
     */
    name?: string;
    /**
     * The source of the image to scan.
     *
     */
    source?: {
      /**
       * The repository name.
       *
       * example:
       * organization/project
       */
      repository?: string;
      /**
       * The tag of the image to scan.
       *
       * example:
       * latest
       */
      tag?: string;
      /**
       * The digest value of the image to scan.
       *
       * example:
       * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
       */
      digest?: string;
    };
    /**
     * (optional) A list of web hooks to call when events happen for the scan.
     *
     */
    webhooks?: {
      /**
       * (optional) A descriptive name for the web hook.
       *
       * example:
       * (optional) a descriptive string
       */
      name?: string;
      /**
       * The URL that Deep Security Smart Check should `POST` the event payload to.
       *
       * example:
       * https://target.example.com/
       */
      hookURL: string;
      /**
       * (optional) You can include your own headers in the web hook request. Use these to provide additional context or authentication information to your web hook receiver.
       *
       */
      headers?: {
        /**
         * The header name.
         * example:
         * Authorization
         */
        name: string;
        /**
         * The header value.
         * example:
         * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
         */
        value: string;
      }[];
      /**
       * (optional) If you provide a `secret` value, then events sent over HTTP will include an `X-Scan-Event-Signature` header that is the SHA-256 HMAC of the event body using your secret as the key.
       *
       * *This value is write-only: the API will not return the secret or show that it has been set.*
       *
       * example:
       * tHiSiSaBaDsEcReT
       */
      secret?: string; // password
      /**
       * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
       *
       * example:
       * false
       */
      insecureSkipVerify?: boolean;
      /**
       * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
       * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
       *
       * example:
       * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
       */
      rootCAs?: string;
      /**
       * (optional, default: `false`). If `true`, the web hook will be invoked whenever a matching event occurs.
       *
       * example:
       * true
       */
      active?: boolean;
      /**
       * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
       *
       */
      events?: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
    }[];
  }
  export interface ResultsMetrics {
    /**
     * Metadata about the scanners that produced the results.
     *
     */
    scanners?: {
      /**
       * Metadata for the malware scanner.
       *
       */
      malware?: {
        /**
         * Availability of the malware scanner.
         *
         */
        status?: "ok" | "unavailable";
        /**
         * The time that the malware pattern database was last updated.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
        versions?: {
          /**
           * The ICRC pattern version.
           *
           */
          icrc?: string;
          /**
           * The TrendX pattern version.
           *
           */
          trendX?: string;
          /**
           * The malware blacklist pattern version.
           *
           */
          blacklist?: string;
        };
      };
      /**
       * Metadata for the vulnerability scanner.
       *
       */
      vulnerabilities?: {
        /**
         * Availability of the vulnerability scanner.
         *
         */
        status?: "ok" | "unavailable";
        /**
         * The time that the vulnerabilities database was last updated.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      };
      /**
       * Metadata for the vulnerability pattern scanner.
       *
       */
      vulnerabilityPatterns?: {
        /**
         * Availability of the vulnerability pattern scanner.
         *
         */
        status?: "ok" | "unavailable";
        /**
         * The time that the vulnerability patterns were last published.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        date?: string; // date-time
        /**
         * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        updated?: string; // date-time
      };
    };
    /**
     * The number of malware items that were found.
     * high:
     *
     */
    malware?: number;
    /**
     * The number of content findings found by severity.
     *
     */
    contents?: {
      /**
       * The total number of content findings categorized by severity.
       *
       */
      total?: {
        /**
         * The number of "Defcon1" content findings that were found.
         *
         */
        defcon1?: number;
        /**
         * The number of critical content findings that were found.
         *
         */
        critical?: number;
        /**
         * The number of high-severity content findings that were found.
         *
         */
        high?: number;
        /**
         * The number of medium-severity content findings that were found.
         *
         */
        medium?: number;
        /**
         * The number of low-severity content findings that were found.
         *
         */
        low?: number;
        /**
         * The number of negligible content findings that were found.
         *
         */
        negligible?: number;
        /**
         * The number of content findings with unknown severity that were found.
         *
         */
        unknown?: number;
      };
      /**
       * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
       *
       */
      unresolved?: {
        /**
         * The number of "Defcon1" content findings that were found.
         *
         */
        defcon1?: number;
        /**
         * The number of critical content findings that were found.
         *
         */
        critical?: number;
        /**
         * The number of high-severity content findings that were found.
         *
         */
        high?: number;
        /**
         * The number of medium-severity content findings that were found.
         *
         */
        medium?: number;
        /**
         * The number of low-severity content findings that were found.
         *
         */
        low?: number;
        /**
         * The number of negligible content findings that were found.
         *
         */
        negligible?: number;
        /**
         * The number of content findings with unknown severity that were found.
         *
         */
        unknown?: number;
      };
    };
    /**
     * The number of vulnerabilities found by severity.
     *
     */
    vulnerabilities?: {
      /**
       * The total number of vulnerabilities that were found by severity.
       *
       */
      total?: {
        /**
         * The number of "Defcon1" vulnerabilities that were found.
         *
         */
        defcon1?: number;
        /**
         * The number of critical vulnerabilities that were found.
         *
         */
        critical?: number;
        /**
         * The number of high-severity vulnerabilities that were found.
         *
         */
        high?: number;
        /**
         * The number of medium-severity vulnerabilities that were found.
         *
         */
        medium?: number;
        /**
         * The number of low-severity vulnerabilities that were found.
         *
         */
        low?: number;
        /**
         * The number of negligible vulnerabilities that were found.
         *
         */
        negligible?: number;
        /**
         * The number of vulnerabilities with unknown severity that were found.
         *
         */
        unknown?: number;
      };
      /**
       * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
       *
       */
      unresolved?: {
        /**
         * The number of "Defcon1" vulnerabilities that were found.
         *
         */
        defcon1?: number;
        /**
         * The number of critical vulnerabilities that were found.
         *
         */
        critical?: number;
        /**
         * The number of high-severity vulnerabilities that were found.
         *
         */
        high?: number;
        /**
         * The number of medium-severity vulnerabilities that were found.
         *
         */
        medium?: number;
        /**
         * The number of low-severity vulnerabilities that were found.
         *
         */
        low?: number;
        /**
         * The number of negligible vulnerabilities that were found.
         *
         */
        negligible?: number;
        /**
         * The number of vulnerabilities with unknown severity that were found.
         *
         */
        unknown?: number;
      };
    };
    /**
     * The number of checklist findings by severity.
     *
     */
    checklists?: {
      /**
       * The total number of checklist findings by severity.
       *
       */
      total?: {
        /**
         * The number of "Defcon1" checklist findings.
         *
         */
        defcon1?: number;
        /**
         * The number of critical checklist findings.
         *
         */
        critical?: number;
        /**
         * The number of high-severity checklist findings.
         *
         */
        high?: number;
        /**
         * The number of medium-severity checklist findings.
         *
         */
        medium?: number;
        /**
         * The number of low-severity checklist findings.
         *
         */
        low?: number;
        /**
         * The number of negligible checklist findings.
         *
         */
        negligible?: number;
        /**
         * The number of checklist findings with unknown severity.
         *
         */
        unknown?: number;
      };
      /**
       * The number of unresolved checklist findings by severity.
       */
      unresolved?: {
        /**
         * The number of "Defcon1" checklist findings.
         *
         */
        defcon1?: number;
        /**
         * The number of critical checklist findings.
         *
         */
        critical?: number;
        /**
         * The number of high-severity checklist findings.
         *
         */
        high?: number;
        /**
         * The number of medium-severity checklist findings.
         *
         */
        medium?: number;
        /**
         * The number of low-severity checklist findings.
         *
         */
        low?: number;
        /**
         * The number of negligible checklist findings.
         *
         */
        negligible?: number;
        /**
         * The number of checklist findings with unknown severity.
         *
         */
        unknown?: number;
      };
    };
  }
  export interface Role {
    /**
     * The role's unique system identifier.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    id?: string;
    /**
     * The URL at which the role can be found.
     *
     * example:
     * /api/roles/6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    href: string;
    /**
     * A name for the role.
     *
     * example:
     * Administrator
     */
    name: string;
    /**
     * A description for the role.
     *
     * example:
     * An administrator has full access to all operations.
     */
    description?: string;
    /**
     * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
     *
     */
    policies: {
      /**
       * The policy format version.
       *
       * example:
       * 2018-05-01
       */
      version?: "2018-05-01";
      /**
       * The list of statements in the policy.
       *
       */
      statements?: {
        /**
         * The policy effect if the statement matches.
         *
         * example:
         * allow
         */
        effect?: "allow" | "deny";
        /**
         * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
         *
         */
        actions?: string[];
      }[];
    }[];
    /**
     * The time that the role was created.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    created: string; // datetime
    /**
     * The time that the role was last modified.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    updated: string; // datetime
  }
  export interface RoleRequest {
    /**
     * A name for the role.
     *
     * example:
     * Administrator
     */
    name: string;
    /**
     * A description for the role.
     *
     * example:
     * An administrator has full access to all operations.
     */
    description?: string;
    /**
     * A list of policies for the role. The total size of the policy list must be less than 32768 bytes.
     *
     */
    policies: {
      /**
       * The policy format version.
       *
       * example:
       * 2018-05-01
       */
      version?: "2018-05-01";
      /**
       * The list of statements in the policy.
       *
       */
      statements?: {
        /**
         * The policy effect if the statement matches.
         *
         * example:
         * allow
         */
        effect?: "allow" | "deny";
        /**
         * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
         *
         */
        actions?: string[];
      }[];
    }[];
  }
  export interface SAMLIdentityProvider {
    /**
     * The SAML identity provider's unique system identifier.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    id?: string;
    /**
     * The URL at which the SAML identity provider can be found.
     *
     * example:
     * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    href?: string;
    /**
     * A name for the SAML identity provider.
     *
     * example:
     * MyIdentityProvider
     */
    name?: string;
    /**
     * (optional, default: `null`) A description for the SAML identity provider.
     *
     * example:
     * My identity provider. Contact me@example.com for support.
     */
    description?: string;
    /**
     * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.  If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
     *
     * example:
     * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
     */
    metadataURL?: string;
    /**
     * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
    /**
     * The time that the identity provider's certificate will expire.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    validUntil?: string; // datetime
    /**
     * Overall status of the identity provider. If the status is `failed`, the `detail` attribute will have more information.
     *
     * example:
     * ok
     */
    status?: "pending" | "ok" | "failed";
    /**
     * Reports additional detail when the status is `failed`.
     *
     * example:
     *
     */
    detail?: "connection-failed" | "invalid-metadata";
    /**
     * The time that the identity provider was created.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    created?: string; // datetime
    /**
     * The time that the identity provider was last modified. If the `metadataURL` is present, Deep Security Smart Check will periodically retrieve the identity provider metadata.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    updated?: string; // datetime
  }
  export interface SAMLIdentityProviderRequest {
    /**
     * The SAML identity provider's unique system identifier.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    id?: string;
    /**
     * The URL at which the SAML identity provider can be found.
     *
     * example:
     * /api/identity-providers/saml/6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    href?: string;
    /**
     * A name for the SAML identity provider.
     *
     * example:
     * MyIdentityProvider
     */
    name?: string;
    /**
     * (optional, default: `null`) A description for the SAML identity provider.
     *
     * example:
     * My identity provider. Contact me@example.com for support.
     */
    description?: string;
    /**
     * (optional, default: `null`) The URL for the identity provider metadata. If only the hostname is provided, the system will fill in the `https://[hostname]/FederationMetadata/2007-06/FederationMetadata.xml` template. Only one of `metadataURL` and `metadataXML` should be present.
     *
     * example:
     * https://idp.example.com/FederationMetadata/2007-06/FederationMetadata.xml
     */
    metadataURL?: string;
    /**
     * (optional, default: `false`) If `true`, Deep Security Smart Check will not verify TLS connections to the identity provider URL when retrieving the identity provider metadata. Use this only in controlled environments where you know that connections between Deep Security Smart Check and the identity provider are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, Deep Security Smart Check will use the provided root CAs as the trusted root CAs when retrieving the identity provider metadata. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, Deep Security Smart Check will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
    /**
     * (optional, default: `null`) If present, Deep Security Smart Check will use the provided metadata XML for the identity provider. Only one of `metadataURL` and `metadataXML` should be present.
     *
     * example:
     * PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxFbnRpdHlEZXNjcmlwdG9yLi4uCg==
     */
    metadataXML?: string;
  }
  export interface Scan {
    /**
     * The unique ID assigned to this scan.
     *
     */
    id: string;
    /**
     * The URL to the scan resource.
     *
     * example:
     * /api/scans/60e53669-c8ef-4d0f-a8ff-3dbbb098d8ff
     */
    href: string;
    /**
     * If you provided a name for the scan, it will be returned here.
     *
     */
    name: string;
    source?: {
      type: "docker";
      /**
       * (for scan type `docker` only) The registry hostname or IP address.
       *
       * example:
       * registry.example.com
       */
      registry?: string;
      /**
       * (for scan type `docker` only) The repository name.
       *
       * example:
       * organization/project
       */
      repository?: string;
      /**
       * (for scan type `docker` only) The tag of the image to scan.
       *
       * example:
       * latest
       */
      tag?: string;
      /**
       * (for scan type `docker` only) The digest value of the image to scan.
       *
       * example:
       * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
       */
      digest?: string;
      /**
       * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
       *
       * example:
       * false
       */
      insecureSkipVerify?: boolean;
      /**
       * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
       * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
       *
       * example:
       * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
       */
      rootCAs?: string;
    };
    status:
      | "pending"
      | "in-progress"
      | "completed-with-findings"
      | "completed-no-findings"
      | "failed";
    details?: {
      /**
       * (optional) More details about the scan status.
       *
       * example:
       * More details about the scan status
       */
      detail?: string;
      /**
       * The time that the scan was requested.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      requested: string; // date-time
      /**
       * The time that the scan started. This value will not be present if the scan has not yet started.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      started?: string; // date-time
      /**
       * The time that the scan was last updated. This value will not be present if the scan has not yet started.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      updated?: string; // date-time
      /**
       * The time that the scan completed. This value will not be present if the scan has not yet completed.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      completed?: string; // date-time
      /**
       * The image digest for the scanned image. This value will only be present for Docker scans.
       *
       * example:
       * sha256:43ea500473edb96e079fe23aba62d60e09c11d4c4714ca284d50b80e064c05e3
       */
      digest?: string;
      /**
       * The target operating system for the scanned image. This value will only be present for Docker scans.
       *
       * example:
       * linux
       */
      os?: string;
      /**
       * The target architecture for the scanned image. This value will only be present for Docker scans.
       *
       * example:
       * amd64
       */
      architecture?: string;
      /**
       * The labels associated with the scanned image. This value will only be present for Docker scans.
       * example:
       * [object Object]
       */
      labels?: {
        [name: string]: string;
      };
      results: {
        /**
         * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
         *
         * example:
         * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
         */
        id?: string;
        /**
         * For scans of Docker images, this attribute will show the time at which the layer was created.
         *
         * example:
         * 2018-05-01T00:00:00Z
         */
        createdAt?: string; // date-time
        /**
         * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
         *
         * example:
         * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
         */
        createdBy?: string;
        /**
         * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
         *
         */
        malware?: string;
        /**
         * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
         *
         */
        vulnerabilities?: string;
        /**
         * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
         *
         */
        contents?: string;
        findings?: {
          /**
           * Metadata about the scanners that produced the results.
           *
           */
          scanners?: {
            /**
             * Metadata for the malware scanner.
             *
             */
            malware?: {
              /**
               * Availability of the malware scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the malware pattern database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
              versions?: {
                /**
                 * The ICRC pattern version.
                 *
                 */
                icrc?: string;
                /**
                 * The TrendX pattern version.
                 *
                 */
                trendX?: string;
                /**
                 * The malware blacklist pattern version.
                 *
                 */
                blacklist?: string;
              };
            };
            /**
             * Metadata for the vulnerability scanner.
             *
             */
            vulnerabilities?: {
              /**
               * Availability of the vulnerability scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerabilities database was last updated.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
            /**
             * Metadata for the vulnerability pattern scanner.
             *
             */
            vulnerabilityPatterns?: {
              /**
               * Availability of the vulnerability pattern scanner.
               *
               */
              status?: "ok" | "unavailable";
              /**
               * The time that the vulnerability patterns were last published.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              date?: string; // date-time
              /**
               * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
               *
               * example:
               * 2018-05-01T00:00:00Z
               */
              updated?: string; // date-time
            };
          };
          /**
           * The number of malware items that were found.
           * high:
           *
           */
          malware?: number;
          /**
           * The number of content findings found by severity.
           *
           */
          contents?: {
            /**
             * The total number of content findings categorized by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" content findings that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical content findings that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity content findings that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity content findings that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity content findings that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible content findings that were found.
               *
               */
              negligible?: number;
              /**
               * The number of content findings with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
          /**
           * The number of vulnerabilities found by severity.
           *
           */
          vulnerabilities?: {
            /**
             * The total number of vulnerabilities that were found by severity.
             *
             */
            total?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
            /**
             * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
             *
             */
            unresolved?: {
              /**
               * The number of "Defcon1" vulnerabilities that were found.
               *
               */
              defcon1?: number;
              /**
               * The number of critical vulnerabilities that were found.
               *
               */
              critical?: number;
              /**
               * The number of high-severity vulnerabilities that were found.
               *
               */
              high?: number;
              /**
               * The number of medium-severity vulnerabilities that were found.
               *
               */
              medium?: number;
              /**
               * The number of low-severity vulnerabilities that were found.
               *
               */
              low?: number;
              /**
               * The number of negligible vulnerabilities that were found.
               *
               */
              negligible?: number;
              /**
               * The number of vulnerabilities with unknown severity that were found.
               *
               */
              unknown?: number;
            };
          };
        };
      }[];
    };
    findings?: {
      /**
       * Metadata about the scanners that produced the results.
       *
       */
      scanners?: {
        /**
         * Metadata for the malware scanner.
         *
         */
        malware?: {
          /**
           * Availability of the malware scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the malware pattern database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
          versions?: {
            /**
             * The ICRC pattern version.
             *
             */
            icrc?: string;
            /**
             * The TrendX pattern version.
             *
             */
            trendX?: string;
            /**
             * The malware blacklist pattern version.
             *
             */
            blacklist?: string;
          };
        };
        /**
         * Metadata for the vulnerability scanner.
         *
         */
        vulnerabilities?: {
          /**
           * Availability of the vulnerability scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerabilities database was last updated.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
        /**
         * Metadata for the vulnerability pattern scanner.
         *
         */
        vulnerabilityPatterns?: {
          /**
           * Availability of the vulnerability pattern scanner.
           *
           */
          status?: "ok" | "unavailable";
          /**
           * The time that the vulnerability patterns were last published.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          date?: string; // date-time
          /**
           * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
           *
           * example:
           * 2018-05-01T00:00:00Z
           */
          updated?: string; // date-time
        };
      };
      /**
       * The number of malware items that were found.
       * high:
       *
       */
      malware?: number;
      /**
       * The number of content findings found by severity.
       *
       */
      contents?: {
        /**
         * The total number of content findings categorized by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" content findings that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical content findings that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity content findings that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity content findings that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity content findings that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible content findings that were found.
           *
           */
          negligible?: number;
          /**
           * The number of content findings with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
      /**
       * The number of vulnerabilities found by severity.
       *
       */
      vulnerabilities?: {
        /**
         * The total number of vulnerabilities that were found by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
         *
         */
        unresolved?: {
          /**
           * The number of "Defcon1" vulnerabilities that were found.
           *
           */
          defcon1?: number;
          /**
           * The number of critical vulnerabilities that were found.
           *
           */
          critical?: number;
          /**
           * The number of high-severity vulnerabilities that were found.
           *
           */
          high?: number;
          /**
           * The number of medium-severity vulnerabilities that were found.
           *
           */
          medium?: number;
          /**
           * The number of low-severity vulnerabilities that were found.
           *
           */
          low?: number;
          /**
           * The number of negligible vulnerabilities that were found.
           *
           */
          negligible?: number;
          /**
           * The number of vulnerabilities with unknown severity that were found.
           *
           */
          unknown?: number;
        };
      };
      /**
       * The number of checklist findings by severity.
       *
       */
      checklists?: {
        /**
         * The total number of checklist findings by severity.
         *
         */
        total?: {
          /**
           * The number of "Defcon1" checklist findings.
           *
           */
          defcon1?: number;
          /**
           * The number of critical checklist findings.
           *
           */
          critical?: number;
          /**
           * The number of high-severity checklist findings.
           *
           */
          high?: number;
          /**
           * The number of medium-severity checklist findings.
           *
           */
          medium?: number;
          /**
           * The number of low-severity checklist findings.
           *
           */
          low?: number;
          /**
           * The number of negligible checklist findings.
           *
           */
          negligible?: number;
          /**
           * The number of checklist findings with unknown severity.
           *
           */
          unknown?: number;
        };
        /**
         * The number of unresolved checklist findings by severity.
         */
        unresolved?: {
          /**
           * The number of "Defcon1" checklist findings.
           *
           */
          defcon1?: number;
          /**
           * The number of critical checklist findings.
           *
           */
          critical?: number;
          /**
           * The number of high-severity checklist findings.
           *
           */
          high?: number;
          /**
           * The number of medium-severity checklist findings.
           *
           */
          medium?: number;
          /**
           * The number of low-severity checklist findings.
           *
           */
          low?: number;
          /**
           * The number of negligible checklist findings.
           *
           */
          negligible?: number;
          /**
           * The number of checklist findings with unknown severity.
           *
           */
          unknown?: number;
        };
      };
    };
  }
  export interface ScanRequest {
    /**
     * (optional) A descriptive name for the scan.
     *
     * example:
     * (optional) a descriptive string
     */
    name?: string;
    /**
     * The source of the image to scan.
     *
     */
    source: {
      type: "docker";
      /**
       * (for scan type `docker` only) The registry hostname or IP address.
       *
       * example:
       * registry.example.com
       */
      registry?: string;
      /**
       * (for scan type `docker` only) The repository name.
       *
       * example:
       * organization/project
       */
      repository?: string;
      /**
       * (for scan type `docker` only) The tag of the image to scan.
       *
       * example:
       * latest
       */
      tag?: string;
      /**
       * (for scan type `docker` only) The digest value of the image to scan.
       *
       * example:
       * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
       */
      digest?: string;
      credentials?: {
        /**
         * (optional) Use this if your source requires requests to be authorized using a bearer token. Requests will include an `Authorization: Bearer {token}` header.
         *
         * example:
         * 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
         */
        token?: string;
        /**
         * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
         *
         * example:
         * username
         */
        username?: string;
        /**
         * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
         *
         * example:
         * ************
         */
        password?: string; // password
        /**
         * The AWS-specific information for authenticating to the registry.
         *
         */
        aws?: {
          /**
           * The AWS region identifier for the region where the registry is located.
           *
           * example:
           * us-east-1
           */
          region: string;
          /**
           * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
           *
           * example:
           * AKIAIOSFODNN7EXAMPLE
           */
          accessKeyID?: string;
          /**
           * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
           *
           * example:
           * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
           */
          secretAccessKey?: string;
          /**
           * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
           *
           * example:
           * arn:aws:iam::account-id:role/role-name
           */
          role?: string;
          /**
           * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
           *
           * example:
           * myExternalID
           */
          externalID?: string;
          /**
           * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
           *
           * example:
           * DeepSecuritySmartCheck
           */
          roleSessionName?: string; // ^[\w+=,.@-]*$
          /**
           * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
           *
           * example:
           * account-id
           */
          registry?: string;
        };
      };
      /**
       * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
       *
       * example:
       * false
       */
      insecureSkipVerify?: boolean;
      /**
       * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS source requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, source requests will use a set of built-in trusted root CAs.
       * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
       *
       * example:
       * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
       */
      rootCAs?: string;
    };
    /**
     * (optional) A list of web hooks to call when events happen for the scan.
     *
     */
    webhooks?: {
      /**
       * (optional) A descriptive name for the web hook.
       *
       * example:
       * (optional) a descriptive string
       */
      name?: string;
      /**
       * The URL that Deep Security Smart Check should `POST` the event payload to.
       *
       * example:
       * https://target.example.com/
       */
      hookURL: string;
      /**
       * (optional) You can include your own headers in the web hook request. Use these to provide additional context or authentication information to your web hook receiver.
       *
       */
      headers?: {
        /**
         * The header name.
         * example:
         * Authorization
         */
        name: string;
        /**
         * The header value.
         * example:
         * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
         */
        value: string;
      }[];
      /**
       * (optional) If you provide a `secret` value, then events sent over HTTP will include an `X-Scan-Event-Signature` header that is the SHA-256 HMAC of the event body using your secret as the key.
       *
       * *This value is write-only: the API will not return the secret or show that it has been set.*
       *
       * example:
       * tHiSiSaBaDsEcReT
       */
      secret?: string; // password
      /**
       * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
       *
       * example:
       * false
       */
      insecureSkipVerify?: boolean;
      /**
       * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
       * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
       *
       * example:
       * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
       */
      rootCAs?: string;
      /**
       * (optional, default: `false`). If `true`, the web hook will be invoked whenever a matching event occurs.
       *
       * example:
       * true
       */
      active?: boolean;
      /**
       * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
       *
       */
      events?: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
    }[];
  }
  export interface ScanStatusDetails {
    /**
     * (optional) More details about the scan status.
     *
     * example:
     * More details about the scan status
     */
    detail?: string;
    /**
     * The time that the scan was requested.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    requested: string; // date-time
    /**
     * The time that the scan started. This value will not be present if the scan has not yet started.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    started?: string; // date-time
    /**
     * The time that the scan was last updated. This value will not be present if the scan has not yet started.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    updated?: string; // date-time
    /**
     * The time that the scan completed. This value will not be present if the scan has not yet completed.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    completed?: string; // date-time
    /**
     * The image digest for the scanned image. This value will only be present for Docker scans.
     *
     * example:
     * sha256:43ea500473edb96e079fe23aba62d60e09c11d4c4714ca284d50b80e064c05e3
     */
    digest?: string;
    /**
     * The target operating system for the scanned image. This value will only be present for Docker scans.
     *
     * example:
     * linux
     */
    os?: string;
    /**
     * The target architecture for the scanned image. This value will only be present for Docker scans.
     *
     * example:
     * amd64
     */
    architecture?: string;
    /**
     * The labels associated with the scanned image. This value will only be present for Docker scans.
     * example:
     * [object Object]
     */
    labels?: {
      [name: string]: string;
    };
    results: {
      /**
       * A layer identifier. For scans of type `docker`, this will be the layer's `digest` value. This attribute will not be present for scans of type `http`.
       *
       * example:
       * sha256:77beb64c6eca68574566d5b04b9f64c71d9b7757a446d562b7d0ae4b13b7c467
       */
      id?: string;
      /**
       * For scans of Docker images, this attribute will show the time at which the layer was created.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      createdAt?: string; // date-time
      /**
       * For scans of Docker images, this attribute will show the Docker daemon command that ran to create this layer. This is not an exact match to the `Dockerfile` line, but will help to provide better context of the results.
       *
       * example:
       * /bin/sh -c #(nop) ADD file:5d127078b2f213dbbf08ca35dafd027011606887a655f641024b14d93ee0de2f in /run-httpd.sh
       */
      createdBy?: string;
      /**
       * If present, a URL pointing to the list of malware that was found. See <a href="#operation/listLayerMalwareFindings">List layer malware findings</a>.
       *
       */
      malware?: string;
      /**
       * If present, a URL pointing to the list of vulnerabilities that were found. See <a href="#operation/listLayerVulnerabilityFindings">List layer vulnerability findings</a>.
       *
       */
      vulnerabilities?: string;
      /**
       * If present, a URL pointing to the list of content scan results that were found. See <a href="#operation/listLayerContentFindings">List layer content findings</a>.
       *
       */
      contents?: string;
      findings?: {
        /**
         * Metadata about the scanners that produced the results.
         *
         */
        scanners?: {
          /**
           * Metadata for the malware scanner.
           *
           */
          malware?: {
            /**
             * Availability of the malware scanner.
             *
             */
            status?: "ok" | "unavailable";
            /**
             * The time that the malware pattern database was last updated.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
            versions?: {
              /**
               * The ICRC pattern version.
               *
               */
              icrc?: string;
              /**
               * The TrendX pattern version.
               *
               */
              trendX?: string;
              /**
               * The malware blacklist pattern version.
               *
               */
              blacklist?: string;
            };
          };
          /**
           * Metadata for the vulnerability scanner.
           *
           */
          vulnerabilities?: {
            /**
             * Availability of the vulnerability scanner.
             *
             */
            status?: "ok" | "unavailable";
            /**
             * The time that the vulnerabilities database was last updated.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
          };
          /**
           * Metadata for the vulnerability pattern scanner.
           *
           */
          vulnerabilityPatterns?: {
            /**
             * Availability of the vulnerability pattern scanner.
             *
             */
            status?: "ok" | "unavailable";
            /**
             * The time that the vulnerability patterns were last published.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            date?: string; // date-time
            /**
             * The time that the vulnerability patterns were last synchronized from the vulnerability feed.
             *
             * example:
             * 2018-05-01T00:00:00Z
             */
            updated?: string; // date-time
          };
        };
        /**
         * The number of malware items that were found.
         * high:
         *
         */
        malware?: number;
        /**
         * The number of content findings found by severity.
         *
         */
        contents?: {
          /**
           * The total number of content findings categorized by severity.
           *
           */
          total?: {
            /**
             * The number of "Defcon1" content findings that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical content findings that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity content findings that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity content findings that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity content findings that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible content findings that were found.
             *
             */
            negligible?: number;
            /**
             * The number of content findings with unknown severity that were found.
             *
             */
            unknown?: number;
          };
          /**
           * The number of unresolved content findings that were found by severity. Unresolved content findings are content findings that were found in the image and were not resolved by an override.
           *
           */
          unresolved?: {
            /**
             * The number of "Defcon1" content findings that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical content findings that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity content findings that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity content findings that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity content findings that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible content findings that were found.
             *
             */
            negligible?: number;
            /**
             * The number of content findings with unknown severity that were found.
             *
             */
            unknown?: number;
          };
        };
        /**
         * The number of vulnerabilities found by severity.
         *
         */
        vulnerabilities?: {
          /**
           * The total number of vulnerabilities that were found by severity.
           *
           */
          total?: {
            /**
             * The number of "Defcon1" vulnerabilities that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical vulnerabilities that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity vulnerabilities that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity vulnerabilities that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity vulnerabilities that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible vulnerabilities that were found.
             *
             */
            negligible?: number;
            /**
             * The number of vulnerabilities with unknown severity that were found.
             *
             */
            unknown?: number;
          };
          /**
           * The number of unresolved vulnerabilities that were found by severity. Unresolved vulnerabilities are vulnerabilities that were found in a layer and were not fixed by an update in a subsequent layer.
           *
           */
          unresolved?: {
            /**
             * The number of "Defcon1" vulnerabilities that were found.
             *
             */
            defcon1?: number;
            /**
             * The number of critical vulnerabilities that were found.
             *
             */
            critical?: number;
            /**
             * The number of high-severity vulnerabilities that were found.
             *
             */
            high?: number;
            /**
             * The number of medium-severity vulnerabilities that were found.
             *
             */
            medium?: number;
            /**
             * The number of low-severity vulnerabilities that were found.
             *
             */
            low?: number;
            /**
             * The number of negligible vulnerabilities that were found.
             *
             */
            negligible?: number;
            /**
             * The number of vulnerabilities with unknown severity that were found.
             *
             */
            unknown?: number;
          };
        };
      };
    }[];
  }
  export interface Session {
    /**
     * The session's unique system identifier.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    id?: string;
    /**
     * The URL at which the session can be found.
     *
     * example:
     * /api/sessions/6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    href?: string;
    user?: {
      /**
       * The user's unique system identifier.
       *
       * example:
       * 6552eebd-5172-411e-ac71-8c323e6ca0fe
       */
      id: string;
      /**
       * The URL at which the user can be found.
       *
       * example:
       * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
       */
      href: string;
      /**
       * A unique name for the user.
       *
       * example:
       * alice
       */
      userID: string;
      /**
       * A display name for the user.
       *
       * example:
       * Alice Panoptes
       */
      name?: string;
      /**
       * A description for the user.
       *
       * example:
       * Guardian of the heifer Io.
       */
      description?: string;
      /**
       * The user's role identifier.
       *
       * example:
       * 6552eebd-5172-411e-ac71-8c323e6ca0fe
       */
      role: string;
      /**
       * If `true`, the user will not be able to perform any actions until they change their password.
       *
       * example:
       * false
       */
      passwordChangeRequired?: boolean;
      /**
       * The time that the user was created.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      created: string; // datetime
      /**
       * The time that the user was last modified.
       *
       * example:
       * 2018-05-01T00:00:00Z
       */
      updated: string; // datetime
    };
    /**
     * The session token. Use the session token the `Authorization` header of subsequent requests: ```Authorization: Bearer SAMPLEeyJhbGciOiJSUz...```
     *
     * example:
     * eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIn0.AzuEel-o9NFJyTvfHx49jMZ-iwU-4NqMQduhUFvWKXXL2ZmMD1Id2ePFU-0ut-esku2avobI7uVDtfEbO6C-Zrn2S4cwsRHnUBCqgzcGwAFr4lHSGi8eAkMSn7b_ceNQu4aGAtDAnCNv3An3U9JUeq29Lze5Md5TTMUSZkFUZR15bJmSKgnd3GvAsIFyIbORmhs2Fe5E9q8jnuSFaeTvvRnlW48Po6bKC09MEhelrES5nnA2tLBu_hMB8VVaDjG7veOtLXrgkH7_6SdBDFZ8Yma_rgA0AwrtYtfQyNunVKctjDq0BE1OPNCJ45n1Cyr7i2TosnYwQUm-v1tX2LZn6g
     */
    token?: string;
    /**
     * The time that the session was created.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    created?: string; // datetime
    /**
     * The time that the session was last modified.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    updated?: string; // datetime
    /**
     * The time that the session will expire.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    expires?: string; // datetime
    /**
     * The session name provided for this session. SAML identity providers can set this by including a `RoleSessionName` claim in the SAML response.
     *
     * example:
     * alice
     */
    roleSessionName?: string;
  }
  export interface SessionRequest {
    /**
     * The user to create a session for.
     *
     */
    user?: {
      /**
       * The user's ID.
       *
       * example:
       * alice
       */
      userID: string;
      /**
       * The user's password.
       *
       * example:
       * ThIsIsNoTaGoOdPaSsWoRd!
       */
      password: string; // password
    };
    /**
     * The SAML response to create a session for.
     *
     */
    saml?: {
      /**
       * The Base64-encoded SAML response.
       *
       * example:
       * PFJlc3BvbnNlPi4uLgo=
       */
      response: string;
      /**
       * If multiple role claims are present in the SAML response, set `selectedRole` to the role value that you want to assume for this session. Required if multiple role claims are present in the SAML response.
       *
       * example:
       * administrator
       */
      selectedRole?: string;
    };
  }
  export interface Source {
    type: "docker";
    /**
     * (for scan type `docker` only) The registry hostname or IP address.
     *
     * example:
     * registry.example.com
     */
    registry?: string;
    /**
     * (for scan type `docker` only) The repository name.
     *
     * example:
     * organization/project
     */
    repository?: string;
    /**
     * (for scan type `docker` only) The tag of the image to scan.
     *
     * example:
     * latest
     */
    tag?: string;
    /**
     * (for scan type `docker` only) The digest value of the image to scan.
     *
     * example:
     * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
     */
    digest?: string;
    /**
     * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
  }
  /**
   * The source of the image to scan.
   *
   */
  export interface SourceRequest {
    type: "docker";
    /**
     * (for scan type `docker` only) The registry hostname or IP address.
     *
     * example:
     * registry.example.com
     */
    registry?: string;
    /**
     * (for scan type `docker` only) The repository name.
     *
     * example:
     * organization/project
     */
    repository?: string;
    /**
     * (for scan type `docker` only) The tag of the image to scan.
     *
     * example:
     * latest
     */
    tag?: string;
    /**
     * (for scan type `docker` only) The digest value of the image to scan.
     *
     * example:
     * sha256:02892826401a9d18f0ea01f8a2f35d328ef039db4e1edcc45c630314a0457d5b
     */
    digest?: string;
    credentials?: {
      /**
       * (optional) Use this if your source requires requests to be authorized using a bearer token. Requests will include an `Authorization: Bearer {token}` header.
       *
       * example:
       * 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
       */
      token?: string;
      /**
       * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
       *
       * example:
       * username
       */
      username?: string;
      /**
       * (optional) Use this if your source requires requests to be authorized using basic username + password authentication. Requests will include an `Authorization: Basic {encoded username + password}` header.
       *
       * example:
       * ************
       */
      password?: string; // password
      /**
       * The AWS-specific information for authenticating to the registry.
       *
       */
      aws?: {
        /**
         * The AWS region identifier for the region where the registry is located.
         *
         * example:
         * us-east-1
         */
        region: string;
        /**
         * The optional AWS IAM access key identifier to use when requesting the registry authorization token. If `roleID` is also set, then `accessKeyID` is the AWS IAM access key ID used to authorize the AWS STS `AssumeRole` request to assume the role. If `accessKeyID` is not set, then the default credential chain is used.
         *
         * example:
         * AKIAIOSFODNN7EXAMPLE
         */
        accessKeyID?: string;
        /**
         * The optional AWS IAM secret access key to use when requesting the registry authorization token. If `roleID` is also set, then `secretAccessKey` is the AWS IAM secret access key used to authorize the AWS STS `AssumeRole` request to assume the role.
         *
         * example:
         * wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY
         */
        secretAccessKey?: string;
        /**
         * The optional AWS IAM role to assume when requesting the registry authorization token. If `accessKeyID` is also set, then `accessKeyID` and `secretAccessKey` are used to authorize the STS `AssumeRole` API request when assuming this role. If AccessKeyID is not set, then the default credential chain is used when assuming the role.
         *
         * example:
         * arn:aws:iam::account-id:role/role-name
         */
        role?: string;
        /**
         * The optional "external ID" to use when calling the AWS STS `AssumeRole` API to assume the role specified in `roleID`. The external ID may be required by the trust policy on the role being assumed.
         *
         * example:
         * myExternalID
         */
        externalID?: string;
        /**
         * The optional "role session name" to use when calling the AWS STS AssumeRole API to assume the role specified in `roleID`. If `roleSessionName` is not provided, then `DeepSecuritySmartCheck` will be used.
         *
         * example:
         * DeepSecuritySmartCheck
         */
        roleSessionName?: string; // ^[\w+=,.@-]*$
        /**
         * The optional registry ID to use to get the registry authorization token. This can be used to access the registry in another AWS account. If not provided, the default registry will be used.
         *
         * example:
         * account-id
         */
        registry?: string;
      };
    };
    /**
     * (optional, default: `false`) If `true`, the scan will not verify TLS connections to the source URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the source are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS source requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, source requests will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
  }
  export interface Statement {
    /**
     * The policy effect if the statement matches.
     *
     * example:
     * allow
     */
    effect?: "allow" | "deny";
    /**
     * A list of actions. Actions take the form `resourceType:operation` and can have a wildcard in either the `resourceType` or `operation` part. You can also use `*` to match all actions. The required action is listed with each API operation.
     *
     */
    actions?: string[];
  }
  export interface User {
    /**
     * The user's unique system identifier.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    id: string;
    /**
     * The URL at which the user can be found.
     *
     * example:
     * /api/users/6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    href: string;
    /**
     * A unique name for the user.
     *
     * example:
     * alice
     */
    userID: string;
    /**
     * A display name for the user.
     *
     * example:
     * Alice Panoptes
     */
    name?: string;
    /**
     * A description for the user.
     *
     * example:
     * Guardian of the heifer Io.
     */
    description?: string;
    /**
     * The user's role identifier.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    role: string;
    /**
     * If `true`, the user will not be able to perform any actions until they change their password.
     *
     * example:
     * false
     */
    passwordChangeRequired?: boolean;
    /**
     * The time that the user was created.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    created: string; // datetime
    /**
     * The time that the user was last modified.
     *
     * example:
     * 2018-05-01T00:00:00Z
     */
    updated: string; // datetime
  }
  export interface UserRequest {
    /**
     * A unique name for the user.
     *
     * example:
     * alice
     */
    userID?: string;
    /**
     * A password for the user.
     *
     * example:
     * ThIsIsNoTaGoOdPaSsWoRd!
     */
    password?: string; // password
    /**
     * If `true`, the user will not be able to perform any actions until they change their password.
     *
     * example:
     * false
     */
    passwordChangeRequired?: boolean;
    /**
     * A display name for the user.
     *
     * example:
     * Alice Panoptes
     */
    name?: string;
    /**
     * A description for the user.
     *
     * example:
     * Guardian of the heifer Io.
     */
    description?: string;
    /**
     * The user's role ID.
     *
     * example:
     * 6552eebd-5172-411e-ac71-8c323e6ca0fe
     */
    role?: string;
  }
  export interface Vulnerability {
    /**
     * A description of the known vulnerability in this package.
     *
     */
    description: string;
    /**
     * The version of the package where the vulnerability has been resolved.
     *
     */
    fixedBy?: string;
    /**
     * If present, this object will describe the fix and what layer the fix is present in.
     *
     */
    fixed?: {
      /**
       * The name of the package.
       *
       */
      name?: string;
      /**
       * The namespace that the package `name` is unique within.
       *
       */
      namespaceName?: string;
      /**
       * The package version that was detected.
       *
       */
      version?: string;
      /**
       * The version format.
       *
       */
      versionFormat?: string;
      /**
       * The layer identifier where the fixed package version was detected.
       *
       */
      layer?: string;
    };
    override?: {
      /**
       * The unique ID assigned to this override.
       *
       * example:
       * 7a2f1d8c-7780-41d2-821b-7230005d4be8
       */
      id?: string;
      /**
       * The URL to the override.
       *
       * example:
       * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
       */
      href?: string;
      /**
       * The name of the vulnerability being overridden.
       *
       * example:
       * CVE-2019-00000
       */
      name?: string;
      /**
       * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
       *
       * example:
       * sample-package
       */
      package?: string;
      /**
       * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
       *
       * example:
       * 0.0.1
       */
      version?: string;
      /**
       * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
       *
       * example:
       * registry.example.com
       */
      registry?: string;
      /**
       * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
       *
       * example:
       * organization/project
       */
      repository?: string;
      /**
       * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
       *
       * example:
       * latest
       */
      tag?: string;
      /**
       * The time that the override was created.
       *
       * example:
       * 2019-03-01T00:00:00Z
       */
      created?: string; // date-time
      /**
       * The time that the override was last updated.
       *
       * example:
       * 2019-03-01T00:00:00Z
       */
      updated?: string; // date-time
      /**
       * The time that the override expires. If not present, the override will not expire.
       *
       * example:
       * 2019-04-01T00:00:00Z
       */
      expires?: string; // date-time
      /**
       * A free-form comment field for your notes.
       *
       * example:
       * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
       */
      comment?: string;
    };
    /**
     * A link to more information about the vulnerability.
     *
     */
    link?: string;
    /**
     * The name of the vulnerability.
     *
     */
    name: string;
    /**
     * The namespace that the package `name` is unique within.
     *
     */
    namespaceName?: string;
    /**
     * The severity assigned to the vulnerability:
     * * `defcon1`: is a `critical` problem which has been manually highlighted by the team. It requires immediate attention.
     * * `critical`: a world-burning problem, exploitable for nearly all people in a default installation of Linux. Includes remote root privilege escalations, or massive data loss.
     * * `high`: a real problem, exploitable for many people in a default installation. Includes serious remote denial of services, local root privilege escalations, or data loss.
     * * `medium`: a real security problem, and is exploitable for many people. Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges. Updates should be made soon for this priority of issue.
     * * `low`: a security problem, but is hard to exploit due to environment, requires a user-assisted attack, a small install base, or does very little damage. These tend to be included in security updates only when higher-priority issues require an upgrade, or if many low-priority issues have built up.
     * * `negligible`: is technically a security problem, but is only theoretical in nature, requires a very special situation, has almost no install base, or does no real damage. These tend not to get backported from upstreams, and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
     *
     * example:
     * high
     */
    severity:
      | "defcon1"
      | "critical"
      | "high"
      | "medium"
      | "low"
      | "negligible"
      | "unknown";
  }
  export interface VulnerabilityFindingOverride {
    /**
     * The unique ID assigned to this override.
     *
     * example:
     * 7a2f1d8c-7780-41d2-821b-7230005d4be8
     */
    id?: string;
    /**
     * The URL to the override.
     *
     * example:
     * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
     */
    href?: string;
    /**
     * The name of the vulnerability being overridden.
     *
     * example:
     * CVE-2019-00000
     */
    name?: string;
    /**
     * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
     *
     * example:
     * sample-package
     */
    package?: string;
    /**
     * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
     *
     * example:
     * 0.0.1
     */
    version?: string;
    /**
     * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
     *
     * example:
     * registry.example.com
     */
    registry?: string;
    /**
     * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
     *
     * example:
     * organization/project
     */
    repository?: string;
    /**
     * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
     *
     * example:
     * latest
     */
    tag?: string;
    /**
     * The time that the override was created.
     *
     * example:
     * 2019-03-01T00:00:00Z
     */
    created?: string; // date-time
    /**
     * The time that the override was last updated.
     *
     * example:
     * 2019-03-01T00:00:00Z
     */
    updated?: string; // date-time
    /**
     * The time that the override expires. If not present, the override will not expire.
     *
     * example:
     * 2019-04-01T00:00:00Z
     */
    expires?: string; // date-time
    /**
     * A free-form comment field for your notes.
     *
     * example:
     * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
     */
    comment?: string;
  }
  export interface VulnerabilityFindingOverrideRequest {
    /**
     * The name of the vulnerability being overridden.
     *
     * example:
     * CVE-2019-00000
     */
    name?: string;
    /**
     * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
     *
     * example:
     * sample-package
     */
    package?: string;
    /**
     * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
     *
     * example:
     * 0.0.1
     */
    version?: string;
    /**
     * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
     *
     * example:
     * registry.example.com
     */
    registry?: string;
    /**
     * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
     *
     * example:
     * organization/project
     */
    repository?: string;
    /**
     * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
     *
     * example:
     * latest
     */
    tag?: string;
    /**
     * The time that the override expires. If not present, the override will not expire.
     *
     * example:
     * 2019-04-01T00:00:00Z
     */
    expires?: string; // date-time
    /**
     * A free-form comment field for your notes.
     *
     * example:
     * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
     */
    comment?: string;
  }
  export interface VulnerabilityScanResult {
    /**
     * The name of an installed package with known vulnerabilities.
     *
     */
    name: string;
    /**
     * The namespace that the package `name` is unique within.
     *
     */
    namespaceName?: string;
    /**
     * The package version that was detected.
     *
     */
    version?: string;
    /**
     * The version format.
     *
     */
    versionFormat?: string;
    /**
     * A list of the known vulnerabilities in this package.
     *
     */
    vulnerabilities: {
      /**
       * A description of the known vulnerability in this package.
       *
       */
      description: string;
      /**
       * The version of the package where the vulnerability has been resolved.
       *
       */
      fixedBy?: string;
      /**
       * If present, this object will describe the fix and what layer the fix is present in.
       *
       */
      fixed?: {
        /**
         * The name of the package.
         *
         */
        name?: string;
        /**
         * The namespace that the package `name` is unique within.
         *
         */
        namespaceName?: string;
        /**
         * The package version that was detected.
         *
         */
        version?: string;
        /**
         * The version format.
         *
         */
        versionFormat?: string;
        /**
         * The layer identifier where the fixed package version was detected.
         *
         */
        layer?: string;
      };
      override?: {
        /**
         * The unique ID assigned to this override.
         *
         * example:
         * 7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        id?: string;
        /**
         * The URL to the override.
         *
         * example:
         * /api/overrides/vulnerabilities/7a2f1d8c-7780-41d2-821b-7230005d4be8
         */
        href?: string;
        /**
         * The name of the vulnerability being overridden.
         *
         * example:
         * CVE-2019-00000
         */
        name?: string;
        /**
         * The package where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all packages.
         *
         * example:
         * sample-package
         */
        package?: string;
        /**
         * The package version where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all package versions.
         *
         * example:
         * 0.0.1
         */
        version?: string;
        /**
         * The image registry where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all registries.
         *
         * example:
         * registry.example.com
         */
        registry?: string;
        /**
         * The image repository where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all repositories. Use `organization/*` to override findings for this vulnerability in all repositories under `organization`.
         *
         * example:
         * organization/project
         */
        repository?: string;
        /**
         * The image tag where the vulnerability is overridden. Use `*` to override findings for this vulnerability in all image tags.
         *
         * example:
         * latest
         */
        tag?: string;
        /**
         * The time that the override was created.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        created?: string; // date-time
        /**
         * The time that the override was last updated.
         *
         * example:
         * 2019-03-01T00:00:00Z
         */
        updated?: string; // date-time
        /**
         * The time that the override expires. If not present, the override will not expire.
         *
         * example:
         * 2019-04-01T00:00:00Z
         */
        expires?: string; // date-time
        /**
         * A free-form comment field for your notes.
         *
         * example:
         * Allowing CVE-2019-00000 for 30 days. Contact alice@example.com for details.
         */
        comment?: string;
      };
      /**
       * A link to more information about the vulnerability.
       *
       */
      link?: string;
      /**
       * The name of the vulnerability.
       *
       */
      name: string;
      /**
       * The namespace that the package `name` is unique within.
       *
       */
      namespaceName?: string;
      /**
       * The severity assigned to the vulnerability:
       * * `defcon1`: is a `critical` problem which has been manually highlighted by the team. It requires immediate attention.
       * * `critical`: a world-burning problem, exploitable for nearly all people in a default installation of Linux. Includes remote root privilege escalations, or massive data loss.
       * * `high`: a real problem, exploitable for many people in a default installation. Includes serious remote denial of services, local root privilege escalations, or data loss.
       * * `medium`: a real security problem, and is exploitable for many people. Includes network daemon denial of service attacks, cross-site scripting, and gaining user privileges. Updates should be made soon for this priority of issue.
       * * `low`: a security problem, but is hard to exploit due to environment, requires a user-assisted attack, a small install base, or does very little damage. These tend to be included in security updates only when higher-priority issues require an upgrade, or if many low-priority issues have built up.
       * * `negligible`: is technically a security problem, but is only theoretical in nature, requires a very special situation, has almost no install base, or does no real damage. These tend not to get backported from upstreams, and will likely not be included in security updates unless there is an easy fix and some other issue causes an update.
       *
       * example:
       * high
       */
      severity:
        | "defcon1"
        | "critical"
        | "high"
        | "medium"
        | "low"
        | "negligible"
        | "unknown";
    }[];
    findings?: {
      /**
       * The number of "Defcon1" vulnerabilities that were found.
       *
       */
      defcon1?: number;
      /**
       * The number of critical vulnerabilities that were found.
       *
       */
      critical?: number;
      /**
       * The number of high-severity vulnerabilities that were found.
       *
       */
      high?: number;
      /**
       * The number of medium-severity vulnerabilities that were found.
       *
       */
      medium?: number;
      /**
       * The number of low-severity vulnerabilities that were found.
       *
       */
      low?: number;
      /**
       * The number of negligible vulnerabilities that were found.
       *
       */
      negligible?: number;
      /**
       * The number of vulnerabilities with unknown severity that were found.
       *
       */
      unknown?: number;
    };
  }
  export interface Webhook {
    /**
     * The URL at which the web hook can be found.
     *
     * example:
     * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8
     */
    href: string;
    /**
     * (optional) A descriptive name for the web hook.
     *
     * example:
     * (optional) a descriptive string
     */
    name: string;
    /**
     * example:
     * https://target.example.com/
     */
    hookURL: string;
    headers: {
      /**
       * example:
       * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
       */
      id: string;
      /**
       * The URL at which the web hook header can be found.
       *
       * example:
       * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
       */
      href: string;
      /**
       * example:
       * Authorization
       */
      name: string;
      /**
       * example:
       * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
       */
      value: string;
    }[];
    /**
     * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
    /**
     * example:
     * true
     */
    active: boolean;
    /**
     * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
     *
     */
    events: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
    /**
     * example:
     * 2018-05-01T00:00:00Z
     */
    created: string; // date-time
    /**
     * example:
     * 2018-05-01T00:00:00Z
     */
    updated?: string; // date-time
  }
  export interface WebhookHeader {
    /**
     * example:
     * 6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
     */
    id: string;
    /**
     * The URL at which the web hook header can be found.
     *
     * example:
     * /api/webhooks/7a2f1d8c-7780-41d2-821b-7230005d4be8/headers/6af2e0e1-bb7c-45b7-9a3f-152a80d154eb
     */
    href: string;
    /**
     * example:
     * Authorization
     */
    name: string;
    /**
     * example:
     * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
     */
    value: string;
  }
  export interface WebhookHeaderRequest {
    /**
     * The header name.
     * example:
     * Authorization
     */
    name: string;
    /**
     * The header value.
     * example:
     * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
     */
    value: string;
  }
  export interface WebhookRequest {
    /**
     * (optional) A descriptive name for the web hook.
     *
     * example:
     * (optional) a descriptive string
     */
    name?: string;
    /**
     * The URL that Deep Security Smart Check should `POST` the event payload to.
     *
     * example:
     * https://target.example.com/
     */
    hookURL: string;
    /**
     * (optional) You can include your own headers in the web hook request. Use these to provide additional context or authentication information to your web hook receiver.
     *
     */
    headers?: {
      /**
       * The header name.
       * example:
       * Authorization
       */
      name: string;
      /**
       * The header value.
       * example:
       * Bearer 9515e65f46cb737cd8c191db2fd80bbd05686e5992b241e8ad7727510b7142e6
       */
      value: string;
    }[];
    /**
     * (optional) If you provide a `secret` value, then events sent over HTTP will include an `X-Scan-Event-Signature` header that is the SHA-256 HMAC of the event body using your secret as the key.
     *
     * *This value is write-only: the API will not return the secret or show that it has been set.*
     *
     * example:
     * tHiSiSaBaDsEcReT
     */
    secret?: string; // password
    /**
     * (optional, default: `false`) If `true`, the web hook will not verify TLS connections to the web hook URL. Use this only in controlled environments where you know that connections between the Deep Security Smart Check scanner and the hook URL are secured by other means.
     *
     * example:
     * false
     */
    insecureSkipVerify?: boolean;
    /**
     * (optional, default: `null`) If present, the web hook will use the provided root CAs as the trusted root CAs for HTTPS web hook requests. The value should be a base-64 encoded list of PEM-encoded certificates. If not present, the web hook will use a set of built-in trusted root CAs.
     * If `insecureSkipVerify` is set to `true`, then the root CAs are not checked.
     *
     * example:
     * LS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tCi4uLiBhbmQgc28gb24gLi4uCg==
     */
    rootCAs?: string;
    /**
     * (optional, default: `false`). If `true`, the web hook will be invoked whenever a matching event occurs.
     *
     * example:
     * true
     */
    active?: boolean;
    /**
     * (optional, default: `["*"]`) If present, this is a list of event types that will be checked before calling the web hook. If the event type matches one of the elements of the list, the web hook will be called. If the list is empty, *all* events will match.
     *
     */
    events?: ("scan-requested" | "scan-started" | "scan-completed" | "*")[];
  }
}
