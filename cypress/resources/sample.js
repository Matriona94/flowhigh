export const sample = {
    
    regularSQL: `WITH all_sales AS (
        SELECT d.year
                , i.brand_id
                , i.class_id
                , i.category_id
                , i.manufact_id
                , SUM(sales_cnt) AS sales_cnt
                , SUM(sales_amt) AS sales_amt
        FROM (SELECT d.year
                    , i.brand_id
                    , i.class_id
                    , i.category_id
                    , i.manufact_id
                    , cs.quantity - COALESCE(cr.return_quantity, 0)        AS sales_cnt
                    , cs.ext_sales_price - COALESCE(cr.return_amount, 0.0) AS sales_amt
                FROM catalog_sales cs
                        JOIN item i ON i.item_sk = cs.item_sk
                        JOIN date_dim d ON d.date_sk = cs.sold_date_sk
                        LEFT JOIN catalog_returns cr ON (cs.order_number = cr.order_number
                    AND cs.item_sk = cr.item_sk)
                WHERE i.category = 'Shoes'
                UNION
                SELECT d.year
                    , i.brand_id
                    , i.class_id
                    , i.category_id
                    , i.manufact_id
                    , ss.quantity - COALESCE(sr.return_quantity, 0)     AS sales_cnt
                    , ss.ext_sales_price - COALESCE(sr.return_amt, 0.0) AS sales_amt
                FROM store_sales ss
                        JOIN item i ON i.item_sk = ss.item_sk
                        JOIN date_dim d ON d.date_sk = ss.sold_date_sk
                        LEFT JOIN store_returns sr ON (ss.ticket_number = sr.ticket_number
                    AND ss.item_sk = sr.item_sk)
                WHERE i.category = 'Shoes'
                UNION
                SELECT d.year
                    , i.brand_id
                    , i.class_id
                    , i.category_id
                    , i.manufact_id
                    , ws.quantity - COALESCE(wr.return_quantity, 0)     AS sales_cnt
                    , ws.ext_sales_price - COALESCE(wr.return_amt, 0.0) AS sales_amt
                FROM web_sales ws
                        JOIN item i ON i.item_sk = ws.item_sk
                        JOIN date_dim d ON d.date_sk = ws.sold_date_sk
                        LEFT JOIN web_returns wr ON (ws.order_number = wr.order_number
                    AND ws.item_sk = wr.item_sk)
                WHERE i.category = 'Shoes') sales_detail
            GROUP BY d.year, i.brand_id, i.class_id, i.category_id, i.manufact_id)
        SELECT prev_yr.d_year                        AS prev_year
                , curr_yr.d_year                        AS year
                , curr_yr.i_brand_id
                , curr_yr.i_class_id
                , curr_yr.i_category_id
                , curr_yr.i_manufact_id
                , prev_yr.sales_cnt                     AS prev_yr_cnt
                , curr_yr.sales_cnt                     AS curr_yr_cnt
                , curr_yr.sales_cnt - prev_yr.sales_cnt AS sales_cnt_diff
                , curr_yr.sales_amt - prev_yr.sales_amt AS sales_amt_diff
        FROM all_sales curr_yr,
                all_sales prev_yr
        WHERE curr_yr.brand_id = prev_yr.brand_id
            AND curr_yr.class_id = prev_yr.class_id
            AND curr_yr.category_id = prev_yr.category_id
            AND curr_yr.manufact_id = prev_yr.manufact_id
            AND curr_yr.year = 2000
            AND prev_yr.year = 2000 - 1
            AND CAST(curr_yr.sales_cnt AS DECIMAL(17, 2)) / CAST(prev_yr.sales_cnt AS DECIMAL(17, 2)) < 0.9
        ORDER BY sales_cnt_diff
        limit 100;`

};
