Generate annual calendar

# End Point

| Method                                     | Path   | Query   | Description    | 
| ------------------------------------------ | ------ | ------- | -------------- |
| ![](https://storage.kodeteks.com/GET.png)  | `/`    | `?=year`|Generate Annual |

# JSON Response Schema

```
{
  "status": true,
  "message": "berhasil",
  "data": [
    {
      "month": "januari",
      "dates": [
        {
          "date": "2024-01-01",
          "weekend": false
        },
        ...
        ...
      ]
    }
  ]
}
```
