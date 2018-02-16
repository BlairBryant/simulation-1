-- select * from bins
-- order by id

select * from bins
where endpoint = $1
order by id