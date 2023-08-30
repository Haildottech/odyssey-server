module.exports = (sequelize, DataTypes) => {
    const Manifest_Jobs = sequelize.define("Manifest_Jobs", {
        awb:                                { type:DataTypes.STRING },
        no_of_pc:                           { type:DataTypes.STRING },
        nature_of_good:                     { type:DataTypes.STRING },
        goross_wt:                          { type:DataTypes.STRING },
        destination:                        { type:DataTypes.STRING },
        office_use:                         { type:DataTypes.STRING },
        gd:                                 { type:DataTypes.STRING },
        job_type:                           { type:DataTypes.STRING },
        shipper_content:                    { type:DataTypes.TEXT('long') },
        consignee_content:                  { type:DataTypes.TEXT('long') },
        carriiar_agent_content:             { type:DataTypes.TEXT('long') },
        agent_IATA_code:                    { type:DataTypes.STRING},
        account_no:                         { type:DataTypes.STRING},
        airport_of_departure:               { type:DataTypes.STRING},
        airport_of_destination:             { type:DataTypes.STRING},
        to:                                 { type:DataTypes.STRING},
        by:                                 { type:DataTypes.STRING},
        by_first_carrier:                   { type:DataTypes.STRING},
        routing_and_destination:            { type:DataTypes.STRING},
        requested_flight:                   { type:DataTypes.STRING},
        requested_flight_date:              { type:DataTypes.STRING},
        non_negotiable:                     { type:DataTypes.STRING},
        issued_by:                          { type:DataTypes.STRING},
        at:                                 { type:DataTypes.STRING},
        on:                                 { type:DataTypes.STRING},
        accounting_information:             { type:DataTypes.STRING},
        refrence_number:                    { type:DataTypes.STRING},
        optional_shipping_information:      { type:DataTypes.STRING},
        amount_of_insurance:                { type:DataTypes.STRING},
        handing_information:                { type:DataTypes.STRING},
        rate_class:                         { type:DataTypes.STRING},
        chargeable_weight:                  { type:DataTypes.STRING},
        rate:                               { type:DataTypes.STRING},
        total:                              { type:DataTypes.STRING},
        prepaid:                            { type:DataTypes.STRING},
        weight_charge:                      { type:DataTypes.STRING},
        collect:                            { type:DataTypes.STRING},
        valuation_charge:                   { type:DataTypes.STRING},
        tax:                                { type:DataTypes.STRING},
        total_other_charges_due_agnet:      { type:DataTypes.STRING},
        total_other_charges_due_carrier:    { type:DataTypes.STRING},
        total_prepaid:                      { type:DataTypes.STRING},
        total_collect:                      { type:DataTypes.STRING},
        currency_conversion_rate:           { type:DataTypes.STRING},
        cc_charges_dest_currency:           { type:DataTypes.STRING},
        charges_at_destination:             { type:DataTypes.STRING},
        other_charges:                      { type:DataTypes.STRING},
        excluded_on_date:                   { type:DataTypes.STRING},
        total_collect_charges:              { type:DataTypes.STRING},
        
    })
    return Manifest_Jobs;
}