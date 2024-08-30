const json = {
    "title": "Skill Matrix - EPL",
    "logoPosition": "right",
    "completedHtml": "<div style=\"max-width: 1000px; width: 100%; padding 32px; margin: 0 auto;\">    <p style=\"text-align: justify\">Dear {completed-by},</p><br>    <p style=\"text-align: justify\">We sincerely appreciate your time and feedback. Your input is invaluable in helping us foster growth and development within our team. Thank you for your contribution!</p><br>    <p style=\"text-align: justify\">Best regards,</p><br>    <p style=\"text-align: justify\">EPL</p></div>",
    "pages": [
     {
      "name": "page-one",
      "elements": [
       {
        "type": "panel",
        "name": "intro",
        "elements": [
         {
          "type": "dropdown",
          "name": "employee-name",
          "title": "Employee Name:",
          "isRequired": true,
          "choices": [
            { "value": "employee1", "text": "Pratik Govindbhai Sangathiya  " },
            { "value": "employee2", "text": "Rahul Kumar " },
            { "value": "employee3", "text": "Kishankumar Dilipbhai Panchal " },
            { "value": "employee4", "text": "Hasmukh Chauhan " }
        ]
         },
         
         {
          "type": "dropdown",
          "name": "completed-by",
          "startWithNewLine": false,
          "title": "Line:",
          "isRequired": true,
          "choices": [
            { "value": "employee1", "text": "Shot Line" },
          
            
        ]
         },
         {
          "type": "text",
          "name": "date",
          "title": "Date Completed:",
          "isRequired": true,
          "inputType": "date"
         },
         {
          "type": "text",
          "name": "role",
          "startWithNewLine": false,
          "title": "Role:",
          "isRequired": true,
          "placeholder": "e.g. Self/Supervisor/Peer/Direct Report etc."
         }
        ],
        "questionTitleWidth": "145px",
        "questionTitleLocation": "left",
        "requiredErrorText": "A response is required for each question in this section."
       },
       {
        "type": "panel",
        "name": "instructions",
        "elements": [
         {
          "type": "html",
          "name": "instructions-text",
          "html": "<p style=\"margin-top: 1em; text-align: justify;\">  <strong>Instructions</strong></p><p style=\"margin-top: 1em; text-align: justify;\">To rate an employee's skills in the Skill Matrix, select the employee and assign ratings from 1 to 5 for each skill category, such as behavioral skills. Provide any relevant comments to support your ratings, and save the information once complete. Ensure ratings are objective and reflective of the employee’s performance.<u></u>. </p><p style=\"margin-top: 0.5em; text-align: justify;\"></p><p style=\"margin-top: 0.5em; text-align: justify;\"></p>"
         },
        ]
       }
      ],
      "title": "Introduction"
     },
     {
      "name": "customer-service",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "customer-service-skills",
        "title": "Behavioural Skills",
        "showCommentArea": true,
        "commentText": "Comments",
        "showHeader": false,
        "alternateRows": true,
        "columns": [
         {
          "name": "rating",
          "cellType": "rating",
          "width": "30%",
          "resetValueIf": "{row.checkbox} notempty",
          "totalType": "avg",
          "totalFormat": "Avg score: {0}",
          "totalDisplayStyle": "decimal",
          "autoGenerate": false,
          "rateCount": 4,
          "rateValues": [
           1,
           2,
           3,
           4
          ]
         },
         {
          "name": "checkbox",
          "cellType": "checkbox",
          "colCount": 0,
          "width": "5%",
          "resetValueIf": "{row.rating} notempty",
          "totalType": "count",
          "totalFormat": "Total: {0}",
          "choices": [
           {
            "value": "n-a",
            "text": "N/A"
           }
          ]
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "rows": [
         {
          "value": "client-relations",
          "text": "Managing strategic intent"
         },
         {
          "value": "listen-understand",
          "text": "Planning capabilities"
         },
         {
          "value": "eagerness",
          "text": "Problem solving & decision making"
         },
         {
          "value": "satisfaction",
          "text": "Customer centricity"
         },
         {
          "value": "fix-problems",
          "text": "Result orientation"
         },
         {
            "value": "fix-problems",
            "text": "Business acumen"
           },
           {
            "value": "fix-problems",
            "text": "Domain expertise"
           },
           {
            "value": "fix-problems",
            "text": "Dealing with ambiguity"
           },
           {
            "value": "fix-problems",
            "text": "Managing innovation"
           },
           {
            "value": "fix-problems",
            "text": "Interpersonnel effectiveness"
           },
           {
            "value": "fix-problems",
            "text": "Nurturing"
           },
           {
            "value": "fix-problems",
            "text": "Building effective team"
           }
         
        ],
        "rowTitleWidth": "65%"
       }
      ],
      "title": "Behavioural Skills"
     },
     {
      "name": "communication-interpersonal-skills",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "communication",
        "title": "Qualifying skills before putting on machine",
        "showCommentArea": true,
        "commentText": "Comments",
        "showHeader": false,
        "alternateRows": true,
        "columns": [
         {
          "name": "rating",
          "cellType": "rating",
          "width": "30%",
          "resetValueIf": "{row.checkbox} notempty",
          "totalType": "avg",
          "totalFormat": "Avg score: {0}",
          "totalDisplayStyle": "decimal",
          "autoGenerate": false,
          "rateCount": 4,
          "rateValues": [
           1,
           2,
           3,
           4
          ]
         },
         {
          "name": "checkbox",
          "cellType": "checkbox",
          "colCount": 0,
          "width": "5%",
          "resetValueIf": "{row.rating} notempty",
          "totalType": "count",
          "totalFormat": "Total: {0}",
          "choices": [
           {
            "value": "n-a",
            "text": "N/A"
           }
          ]
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "rows": [
         {
          "value": "active",
          "text": "Basic overview on EP systems, HMP & GMP"
         },
         {
          "value": "relations",
          "text": "Knows & understood EP Quality Policy"
         },
         {
          "value": "follows",
          "text": "Knows, how to retrive respective system procedure"
         },
         {
          "value": "clear-communication",
          "text": "Knows, how to retrive respective locational procedure"
         },
         {
          "value": "reliable",
          "text": "Knows & understood EP Safety policy"
         },
         {
            "value": "reliable",
            "text": "Knows emergency exit, & assembly points of unit"
           },
           {
            "value": "reliable",
            "text": "Knows accident reporting & break down communication matrix"
           },
           {
            "value": "reliable",
            "text": "Knows about the personnel protective equipments, used at shopfloor"
           },
           {
            "value": "reliable",
            "text": "Knows EPs code of conduct"
           },
           {
            "value": "reliable",
            "text": "Knows to read engineering drawing"
           },
           {
            "value": "reliable",
            "text": "Basic knowledge of mechanics"
           },
           {
            "value": "reliable",
            "text": "Basic knowledge of electrical & electronics"
           },
           {
            "value": "reliable",
            "text": "Functional know how of respective area"
           },

           {
            "value": "reliable",
            "text": "Basic knowledge of plastics"
           },

           {
            "value": "reliable",
            "text": "Knows to calculate the machine efficiency & scrap %"
           }


        ],
        "rowTitleWidth": "65%"
       }
      ],
      "title": "Qualifying skills before putting on machine"
     },
     {
      "name": "work-quality",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "quality",
        "title": "Knowing process capability",
        "showCommentArea": true,
        "commentText": "Comments",
        "showHeader": false,
        "alternateRows": true,
        "columns": [
         {
          "name": "rating",
          "cellType": "rating",
          "width": "30%",
          "resetValueIf": "{row.checkbox} notempty",
          "totalType": "avg",
          "totalFormat": "Avg score: {0}",
          "totalDisplayStyle": "decimal",
          "autoGenerate": false,
          "rateCount": 4,
          "rateValues": [
           1,
           2,
           3,
           4
          ]
         },
         {
          "name": "checkbox",
          "cellType": "checkbox",
          "colCount": 0,
          "width": "5%",
          "resetValueIf": "{row.rating} notempty",
          "totalType": "count",
          "totalFormat": "Total: {0}",
          "choices": [
           {
            "value": "n-a",
            "text": "N/A"
           }
          ]
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "rows": [
         {
          "value": "accurate",
          "text": "Quality standards requirements"
         },
         {
          "value": "pressure",
          "text": "Inprocess quality checks"
         }
        ],
        "rowTitleWidth": "65%"
       }
      ],
      "title": "Knowing process capability "
     },
     
     {
      "name": "judgements-decisions",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "decisions",
        "title": "Seamer operations",
        "showCommentArea": true,
        "commentText": "Comments",
        "showHeader": false,
        "alternateRows": true,
        "columns": [
         {
          "name": "rating",
          "cellType": "rating",
          "width": "30%",
          "resetValueIf": "{row.checkbox} notempty",
          "totalType": "avg",
          "totalFormat": "Avg score: {0}",
          "totalDisplayStyle": "decimal",
          "autoGenerate": false,
          "rateCount": 4,
          "rateValues": [
           1,
           2,
           3,
           4
          ]
         },
         {
          "name": "checkbox",
          "cellType": "checkbox",
          "colCount": 0,
          "width": "5%",
          "resetValueIf": "{row.rating} notempty",
          "totalType": "count",
          "totalFormat": "Total: {0}",
          "choices": [
           {
            "value": "n-a",
            "text": "N/A"
           }
          ]
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "rows": [
            {
                "value": "unwinder-disc-position-setting",
                "text": "Unwinder Disc Position Setting"
            },
            {
                "value": "roll-preparation",
                "text": "Roll Preparation"
            },
            {
                "value": "feeding-web-path-rollers-unwinder-to-splice-table",
                "text": "Feeding the web through path rollers From Unwinder To Splice Table"
            },
            {
                "value": "make-splice-drawer-ready",
                "text": "Make Splice Drawer Ready"
            },
            {
                "value": "tape-dispenser-setting",
                "text": "Tape Dispenser Setting"
            },
            {
                "value": "laminate-orientation-splicing-unit-roll-change",
                "text": "Laminate Orientation on Splicing unit for Roll Change"
            },
            {
                "value": "feeding-web-path-rollers-till-accumulator",
                "text": "Feeding the web through path rollers Till Accumulator"
            },
            {
                "value": "teaching-i-mark-laminate-joint-position",
                "text": "Teaching of 'I' Mark for Laminate Joint Position"
            },
            {
                "value": "i-mark-sensor-teaching",
                "text": "'I' Mark Sensor Teaching"
            },
            {
                "value": "bad-cut-sensor-teaching",
                "text": "Bad Cut Sensor Teaching"
            },
            {
                "value": "cutter-replacement-trimming-unit",
                "text": "Cutter Replacement in Trimming Unit"
            },
            {
                "value": "trimming-unit-setting",
                "text": "Trimming Unit Setting"
            },
            {
                "value": "feeding-web-path-rollers-accumulator-to-carriage",
                "text": "Feeding the web through path rollers From Accumulator to Carriage"
            },
            {
                "value": "internal-band-change",
                "text": "Internal band change"
            },
            {
                "value": "external-band-change",
                "text": "External band change"
            },
            {
                "value": "forming-belt-change",
                "text": "Forming Belt Change"
            },
            {
                "value": "hf-bar-tape-mandrel-tape-change",
                "text": "HF bar tape / Mandrel tape change"
            },
            {
                "value": "sleeve-diameter-adjustment",
                "text": "Sleeve diameter adjustment"
            },
            {
                "value": "overlap-guide-adjustment-setting",
                "text": "Overlap Guide Adjustment Setting"
            },
            {
                "value": "sealing-monitoring-sensor-setting",
                "text": "Sealing Monitoring Sensor Setting"
            },
            {
                "value": "overlap-view-camera-position-adjustment",
                "text": "Overlap View Camera Position Adjustment"
            },
            {
                "value": "preheater-bar-position-adjustment",
                "text": "PreHeater Bar Position Adjustment"
            },
            {
                "value": "carriage-open-close-mandrel-cleaning",
                "text": "Carriage Open & Close For Mandrel Cleaning"
            },
            {
                "value": "seamer-mandrel-support-roller-position-setting",
                "text": "Seamer Mandrel Support Roller Position Setting"
            },
            {
                "value": "sleeve-guide-rollers-cutting-support-position-setting",
                "text": "Sleeve Guide Rollers for Cutting Support Position Setting"
            },
            {
                "value": "tube-cutter-change",
                "text": "Tube Cutter change"
            },
            {
                "value": "mechanical-cutter-position-adjustment",
                "text": "Mechanical Cutter position adjustment"
            },
            {
                "value": "teaching-i-mark-scanner",
                "text": "Teaching of 'I' mark scanner"
            },
            {
                "value": "different-tabs-touch-screen-use",
                "text": "Different tabs of touch screen & its use"
            }
        ],
        "rowTitleWidth": "65%"
       }
      ],
      "title": "Touch screen operation"
     },
     {
        "name": "Touch screen operation",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "decisions",
          "title": "Seamer operations",
          "showCommentArea": true,
          "commentText": "Comments",
          "showHeader": false,
          "alternateRows": true,
          "columns": [
           {
            "name": "rating",
            "cellType": "rating",
            "width": "30%",
            "resetValueIf": "{row.checkbox} notempty",
            "totalType": "avg",
            "totalFormat": "Avg score: {0}",
            "totalDisplayStyle": "decimal",
            "autoGenerate": false,
            "rateCount": 4,
            "rateValues": [
             1,
             2,
             3,
             4
            ]
           },
           {
            "name": "checkbox",
            "cellType": "checkbox",
            "colCount": 0,
            "width": "5%",
            "resetValueIf": "{row.rating} notempty",
            "totalType": "count",
            "totalFormat": "Total: {0}",
            "choices": [
             {
              "value": "n-a",
              "text": "N/A"
             }
            ]
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "rows": [
             {
        "value": "touch-screen-operation-manual-mode",
        "text": "Touch Screen Operation in Manual Mode"
    },
    {
        "value": "recipe-creation-correction-changing",
        "text": "Recipe Creation, Correction & Changing"
    }
          ],
          "rowTitleWidth": "65%"
         }
        ],
        "title": "Touch screen operation"
       },
       {
        "name": "judgements-decisions",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "decisions",
          "title": "Auto Packer",
          "showCommentArea": true,
          "commentText": "Comments",
          "showHeader": false,
          "alternateRows": true,
          "columns": [
           {
            "name": "rating",
            "cellType": "rating",
            "width": "30%",
            "resetValueIf": "{row.checkbox} notempty",
            "totalType": "avg",
            "totalFormat": "Avg score: {0}",
            "totalDisplayStyle": "decimal",
            "autoGenerate": false,
            "rateCount": 4,
            "rateValues": [
             1,
             2,
             3,
             4
            ]
           },
           {
            "name": "checkbox",
            "cellType": "checkbox",
            "colCount": 0,
            "width": "5%",
            "resetValueIf": "{row.rating} notempty",
            "totalType": "count",
            "totalFormat": "Total: {0}",
            "choices": [
             {
              "value": "n-a",
              "text": "N/A"
             }
            ]
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "rows": [
            {
                "value": "tube-filling-position-parameter-setting-grouping-belt",
                "text": "Tube Filling Position Parameter Setting for Grouping Belt"
            },
            {
                "value": "tube-pusher-no1-position-parameter-setting",
                "text": "Tube Pusher No 1 Position Parameter Setting"
            },
            {
                "value": "tube-pusher-no2-position-parameter-setting",
                "text": "Tube Pusher No 2 Position Parameter Setting"
            },
            {
                "value": "mandrel-plate-horizontal-position-adjustment-parameter-setting",
                "text": "Mandrel Plate Horizontal Position Adjustment Parameter Setting"
            },
            {
                "value": "box-holding-plate-position-setting",
                "text": "Box Holding Plate Position Setting"
            },
            {
                "value": "different-tabs-touch-screen",
                "text": "Different Tabs of Touch Screen"
            }
          ],
          "rowTitleWidth": "65%"
         }
        ],
        "title": "Auto Packer"
       },
       {
        "name": "judgements-decisions",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "decisions",
          "title": "JOB Change",
          "showCommentArea": true,
          "commentText": "Comments",
          "showHeader": false,
          "alternateRows": true,
          "columns": [
           {
            "name": "rating",
            "cellType": "rating",
            "width": "30%",
            "resetValueIf": "{row.checkbox} notempty",
            "totalType": "avg",
            "totalFormat": "Avg score: {0}",
            "totalDisplayStyle": "decimal",
            "autoGenerate": false,
            "rateCount": 4,
            "rateValues": [
             1,
             2,
             3,
             4
            ]
           },
           {
            "name": "checkbox",
            "cellType": "checkbox",
            "colCount": 0,
            "width": "5%",
            "resetValueIf": "{row.rating} notempty",
            "totalType": "count",
            "totalFormat": "Total: {0}",
            "choices": [
             {
              "value": "n-a",
              "text": "N/A"
             }
            ]
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "rows": [
            {
                "value": "tube-filling-position-parameter-setting-grouping-belt",
                "text": "Tube Filling Position Parameter Setting for Grouping Belt"
            },
            {
                "value": "tube-pusher-no1-position-parameter-setting",
                "text": "Tube Pusher No 1 Position Parameter Setting"
            },
            {
                "value": "tube-pusher-no2-position-parameter-setting",
                "text": "Tube Pusher No 2 Position Parameter Setting"
            },
            {
                "value": "mandrel-plate-horizontal-position-adjustment-parameter-setting",
                "text": "Mandrel Plate Horizontal Position Adjustment Parameter Setting"
            },
            {
                "value": "box-holding-plate-position-setting",
                "text": "Box Holding Plate Position Setting"
            },
            {
                "value": "different-tabs-touch-screen",
                "text": "Different Tabs of Touch Screen"
            }
          ],
          "rowTitleWidth": "65%"
         }
        ],
        "title": "JOB Change"
       },


       {
        "name": "Tool Change",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "decisions",
          "title": "Tool Change",
          "showCommentArea": true,
          "commentText": "Comments",
          "showHeader": false,
          "alternateRows": true,
          "columns": [
           {
            "name": "rating",
            "cellType": "rating",
            "width": "30%",
            "resetValueIf": "{row.checkbox} notempty",
            "totalType": "avg",
            "totalFormat": "Avg score: {0}",
            "totalDisplayStyle": "decimal",
            "autoGenerate": false,
            "rateCount": 4,
            "rateValues": [
             1,
             2,
             3,
             4
            ]
           },
           {
            "name": "checkbox",
            "cellType": "checkbox",
            "colCount": 0,
            "width": "5%",
            "resetValueIf": "{row.rating} notempty",
            "totalType": "count",
            "totalFormat": "Total: {0}",
            "choices": [
             {
              "value": "n-a",
              "text": "N/A"
             }
            ]
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "rows": [
            {
                "value": "replace-overlap-guide",
                "text": "Replace Overlap Guide"
            },
            {
                "value": "replace-forming-belt",
                "text": "Replace Forming Belt"
            },
            {
                "value": "replace-seamer-mandrel",
                "text": "Replace Seamer Mandrel"
            },
            {
                "value": "remove-forming-belt-support-bottom-rollers",
                "text": "Remove Forming Belt Support Bottom Rollers"
            },
            {
                "value": "replace-guide-bush-print-mark-reader",
                "text": "Replace Guide Bush for Print Mark Reader"
            },
            {
                "value": "replace-knife-bush",
                "text": "Replace Knife Bush"
            },
            {
                "value": "replace-blade-holder",
                "text": "Replace Blade Holder"
            },
            {
                "value": "replace-tube-body-guide",
                "text": "Replace Tube Body Guide"
            },
            {
                "value": "web-unwinder-setting",
                "text": "Web Unwinder Setting"
            },
            {
                "value": "auto-splicer-setting",
                "text": "Auto Splicer Setting"
            },
            {
                "value": "trimming-unit-setting",
                "text": "Trimming Unit Setting"
            },
            {
                "value": "laminate-path-setting-seaming-operation",
                "text": "Laminate Path Setting for Seaming Operation"
            },
            {
                "value": "print-mark-reader-setting",
                "text": "Print Mark Reader Setting"
            },
            {
                "value": "replace-loading-pusher",
                "text": "Replace Loading Pusher"
            },
            {
                "value": "replace-loading-vacuum-plate",
                "text": "Replace Loading Vacuum Plate"
            },
            {
                "value": "replace-header-mandrel-heads",
                "text": "Replace Header Mandrel Heads"
            },
            {
                "value": "replace-compression-unit-tooling-parts",
                "text": "Replace Compression Unit Tooling Parts"
            },
            {
                "value": "replace-repressing-unit-tooling-parts",
                "text": "Replace Repressing Unit Tooling Parts"
            },
            {
                "value": "replace-rlu-unit-grippers",
                "text": "Replace RLU Unit Grippers"
            },
            {
                "value": "replace-capper-mandrel",
                "text": "Replace Capper Mandrel"
            },
            {
                "value": "replace-capper-gripper",
                "text": "Replace Capper Gripper"
            },
            {
                "value": "replace-cap-separator-plate",
                "text": "Replace Cap Separator Plate"
            },
            {
                "value": "replace-cap-rail-bowl",
                "text": "Replace Cap Rail & Bowl"
            },
            {
                "value": "replace-unloading-unit-tube-guide-plate",
                "text": "Replace Unloading Unit Tube Guide Plate"
            },
            {
                "value": "replace-packer-grouping-belt",
                "text": "Replace Packer Grouping Belt"
            },
            {
                "value": "replace-packer-tube-transfer-plate-setting",
                "text": "Replace Packer Tube Transfer Plate Change & Setting"
            },
            {
                "value": "packer-parameter-recipe-change-setting",
                "text": "Packer Parameter (Recipe) Change & Setting"
            },
            {
                "value": "autopacker-trouble-shooting",
                "text": "Autopacker Trouble Shooting"
            }
          ],
          "rowTitleWidth": "65%"
         }
        ],
        "title": "Tool Change"
       },
       {
        "name": "Maintenance",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "decisions",
          "title": "Maintenance",
          "showCommentArea": true,
          "commentText": "Comments",
          "showHeader": false,
          "alternateRows": true,
          "columns": [
           {
            "name": "rating",
            "cellType": "rating",
            "width": "30%",
            "resetValueIf": "{row.checkbox} notempty",
            "totalType": "avg",
            "totalFormat": "Avg score: {0}",
            "totalDisplayStyle": "decimal",
            "autoGenerate": false,
            "rateCount": 4,
            "rateValues": [
             1,
             2,
             3,
             4
            ]
           },
           {
            "name": "checkbox",
            "cellType": "checkbox",
            "colCount": 0,
            "width": "5%",
            "resetValueIf": "{row.rating} notempty",
            "totalType": "count",
            "totalFormat": "Total: {0}",
            "choices": [
             {
              "value": "n-a",
              "text": "N/A"
             }
            ]
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "rows": [
            {
                "value": "follow-spm",
                "text": "Follow SPM"
            },
            {
                "value": "follow-l2-maintenance",
                "text": "Follow L2 Maintenance"
            },
            {
                "value": "cleaning-changing-oil-air-water-filter",
                "text": "Cleaning & Changing of Oil/Air & Water Filter"
            },
            {
                "value": "filling-machine-history-book",
                "text": "Filling of Machine History Book"
            }
          ],
          "rowTitleWidth": "65%"
         }
        ],
        "title": "Maintenance"
       },
       {
        "name": "Defect identification & correction",
        "elements": [
         {
          "type": "matrixdropdown",
          "name": "decisions",
          "title": "Defect identification & correction",
          "showCommentArea": true,
          "commentText": "Comments",
          "showHeader": false,
          "alternateRows": true,
          "columns": [
           {
            "name": "rating",
            "cellType": "rating",
            "width": "30%",
            "resetValueIf": "{row.checkbox} notempty",
            "totalType": "avg",
            "totalFormat": "Avg score: {0}",
            "totalDisplayStyle": "decimal",
            "autoGenerate": false,
            "rateCount": 4,
            "rateValues": [
             1,
             2,
             3,
             4
            ]
           },
           {
            "name": "checkbox",
            "cellType": "checkbox",
            "colCount": 0,
            "width": "5%",
            "resetValueIf": "{row.rating} notempty",
            "totalType": "count",
            "totalFormat": "Total: {0}",
            "choices": [
             {
              "value": "n-a",
              "text": "N/A"
             }
            ]
           }
          ],
          "choices": [
           1,
           2,
           3,
           4,
           5
          ],
          "rows": [
            {
                "value": "seam-compression-correction",
                "text": "Seam Compression Correction"
            },
            {
                "value": "body-tightness-scratch-mark-correction",
                "text": "Body Tightness & Scratch Mark Correction"
            },
            {
                "value": "seam-overlap-polyflow-correction",
                "text": "Seam Overlap & Polyflow Correction"
            },
            {
                "value": "sleeve-length-variation-correction",
                "text": "Sleeve Length Variation Correction"
            },
            {
                "value": "seam-open-ovality-correction",
                "text": "Seam Open & Ovality Correction"
            },
            {
                "value": "weak-bonding-shoulder-sleeve-correction",
                "text": "Weak Bonding of Shoulder & Sleeve Correction"
            },
            {
                "value": "shoulder-thickness-shrinkage-issue-correction",
                "text": "Shoulder Thickness & Shrinkage Issue Correction"
            },
            {
                "value": "flash-shoulder-thread-correction",
                "text": "Flash at Shoulder / Thread Correction"
            },
            {
                "value": "cut-orifice-blocked-orifice-correction",
                "text": "Cut Orifice / Blocked Orifice Correction"
            },
            {
                "value": "body-down-wrinkles-correction",
                "text": "Body Down / Body Wrinkles Correction"
            },
            {
                "value": "black-marks-issue-correction",
                "text": "Black Marks Issue Correction"
            },
            {
                "value": "cap-falling-during-transport-correction",
                "text": "Cap Falling During Transport Correction"
            },
            {
                "value": "loose-capping-cap-over-tightening-correction",
                "text": "Loose Capping / Cap Over Tightening Correction"
            },
            {
                "value": "tilted-capping-correction",
                "text": "Tilted Capping Correction"
            }
          ],
          "rowTitleWidth": "65%"
         }
        ],
        "title": "Defect identification & correction"
       },
       
     {
      "name": "Data management",
      "elements": [
       {
        "type": "matrixdropdown",
        "name": "competencies",
        "title": "Data management",
        "showCommentArea": true,
        "commentText": "Comments",
        "showHeader": false,
        "alternateRows": true,
        "columns": [
         {
          "name": "rating",
          "cellType": "rating",
          "width": "30%",
          "resetValueIf": "{row.checkbox} notempty",
          "totalType": "avg",
          "totalFormat": "Avg score: {0}",
          "totalDisplayStyle": "decimal",
          "autoGenerate": false,
          "rateCount": 4,
          "rateValues": [
           1,
           2,
           3,
           4
          ]
         },
         {
          "name": "checkbox",
          "cellType": "checkbox",
          "colCount": 0,
          "width": "5%",
          "resetValueIf": "{row.rating} notempty",
          "totalType": "count",
          "totalFormat": "Total: {0}",
          "choices": [
           {
            "value": "n-a",
            "text": "N/A"
           }
          ]
         }
        ],
        "choices": [
         1,
         2,
         3,
         4,
         5
        ],
        "rows": [
            {
                "value": "use-of-zprism",
                "text": "Use of ZPRISM"
            },
            {
                "value": "use-of-qa-32",
                "text": "Use of QA 32"
            },
            {
                "value": "use-of-zpp031-zpp051-zpp040n",
                "text": "Use of ZPP031/ZPP051/ZPP040n"
            },
            {
                "value": "material-accountability",
                "text": "Material Accountability"
            },
            {
                "value": "presentation-on-machine-performance",
                "text": "Presentation on Machine Performance"
            },
            {
                "value": "machine-performance-display-updation",
                "text": "Machine Performance Display Updation"
            }
        ],
        "rowTitleWidth": "65%"
       },
       {
        "type": "panel",
        "name": "totals",
        "readOnly": true,
        "title": "FOR HR TEAM ONLY"
       },
       {
        "type": "expression",
        "name": "total-average",
        "startWithNewLine": false,
        "title": "Total average score: ",
        "titleLocation": "left",
        "expression": "{customer-service-skills-total.rating} + {communication-total.rating} + {quality-total.rating} + {decisions-total.rating} + {competencies-total.rating}",
        "displayStyle": "decimal",
        "maximumFractionDigits": 2,
        "minimumFractionDigits": 2
       },
       {
        "type": "expression",
        "name": "total-n-a",
        "startWithNewLine": false,
        "title": "Total 'N/A' answers: ",
        "titleLocation": "left",
        "expression": "{customer-service-skills-total.checkbox} + {communication-total.checkbox}",
        "maximumFractionDigits": 2,
        "minimumFractionDigits": 2
       }
      ],
      "title": "Data management"
     }
    ],
    "showPageTitles": false,
    "showQuestionNumbers": "off",
    "showProgressBar": "belowheader",
    "progressBarShowPageTitles": true,
    "progressBarShowPageNumbers": true,
    "firstPageIsStarted": true,
    "widthMode": "static",
    "width": "1200"
   };