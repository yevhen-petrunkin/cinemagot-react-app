export function stringifyData(array) {
  return array.map(item => item.name).join(', ');
}

export function stringifyCrewList(list, jobTag) {
  return list
    .filter(({ job }) => job.toLowerCase() === jobTag)
    .reduce((aggr, member, _, arr) => {
      if (arr.indexOf(member) < 4) {
        aggr = [...aggr, member.memberName];
      }
      return aggr;
    }, [])
    .join(', ');
}

export function stringifyActorList(list) {
  return (
    list
      .reduce((aggr, actor, _, arr) => {
        if (arr.indexOf(actor) < 5) {
          aggr = [...aggr, actor.actorName];
        }
        return aggr;
      }, [])
      .join(', ') + ' et al.'
  );
}
