<?xml version="1.0" encoding="UTF-8" ?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:template match="/">
        <html>

        <head>
            <style>
                table {
                    border-collapse: collapse;
                }
                
                td,
                th {
                    border: 1px solid #999;
                    padding: 0.5rem;
                    text-align: left;
                }
                
                th {
                    font-weight: bold;
                }
            </style>
        </head>

        <body>
            <table>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Location</th>
                    <th>Seller e-mail</th>
                    <th>Date</th>
                </tr>
                <xsl:for-each select="classifieds/advert">
                    <tr>
                        <td>
                            <xsl:value-of select="adTitle" />
                        </td>
                        <td>
                            <xsl:value-of select="adDescription" />
                        </td>
                        <td>
                            <xsl:value-of select="adCategory" />
                        </td>
                        <td>
                            <xsl:value-of select="adPrice" />
                        </td>
                        <td>
                            <xsl:value-of select="adLocation" />
                        </td>
                        <td>
                            <xsl:value-of select="adSeller" />
                        </td>
                        <td>
                            <xsl:value-of select="adDate" />
                        </td>
                    </tr>
                </xsl:for-each>
            </table>
        </body>

        </html>
    </xsl:template>
</xsl:stylesheet>