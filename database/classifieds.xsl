<?xml version='1.0'?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/TR/WD-xsl">
<xsl:template match="/">
<html>
<body>
<table border="2" bgcolor="yellow">
<tr>
<th>Title</th>
<th>Artist</th>
</tr>
<xsl:for-each select="classifieds/advert">
<tr>
<td>
<xsl:value-of select="title"/>
</td>
<td>
<xsl:value-of select="ARTIST"/>
</td>
</tr>
</xsl:for-each>
</table>
</body>
</html>
</xsl:template>
</xsl:stylesheet>