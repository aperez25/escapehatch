module.exports = function (stackList, userErr) {
  return stackList.map( item => ({
    url: item.link,
    body: item.question_body,
    title: item.title,
    vendor_id: item.id,
    posted_on: item.creation_date,
    updated_on: item.last_activity_date,
    comments: item.answer_count,
    answered: item.is_answered,
    score: item.score,
    views: item.view_count,
    tags: item.tags,
    vendor: 'stackapp',
    error: userErr
    })
  )
}