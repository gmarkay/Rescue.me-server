
'use strict';


module.exports. addIncident = ({app, query:{UserId}, body: { description, locationDescription, location_lat, location_lng }},  res, next)=>{
  let Incident = app.get('models').Incident;
  console.log(UserId, 'userId', description,'description', locationDescription,'locationDescription', location_lat,'location_lat', location_lng, 'location_lng', 'everything')
  Incident.create({
    UserId,
    description,
    locationDescription,
    location_lat,
    location_lng
  }).then(newIncident=>{
    res.status(201).json(newIncident);
  }).catch((err)=>{
    console.log(err);
    next(err);
  });
}


  module.exports.getIncidents=({app}, res, next)=>{
    let Incident = app.get('models').Incident;
    Incident.findAll({
      where:{
        resolved: null,
        rescuerId: null,
        date: null
      }
    }).then(incidents=>{
      console.log(incidents, 'in server ctrl'); 
      res.status(200).json(incidents);
    });
  }
  module.exports.stopSendingNotifications= ({app, body:{incidentId}}, res, next)=>{
    let Incident = app.get('models').Incident;
    Incident.findById(incidentId)
    .then(incident=>{
      return incident.updateAttributes({date: 1})
    }).then(updated=>{
      res.status(200).json(updated);
    }).catch(err=>{
      console.log(err);
    })
  };